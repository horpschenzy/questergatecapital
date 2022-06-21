<?php

namespace App\Exports;

use App\Models\Withdrawal;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;

class WithdrawalsExport implements FromCollection, WithMapping, WithHeadings
{
    use Exportable;

    // a place to store the withdrawals dependency
    private $withdrawals;

    // use constructor to handle dependency injection
    public function __construct($withdrawals)
    {
        $this->withdrawals = $withdrawals;
    }
    
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return $this->withdrawals;
    }

    public function map($withdrawal): array
    {
        $status = 'PENDING';
        if($withdrawal->status == '4'){
            $status = 'DECLINED';
        }
        elseif($withdrawal->status == '3'){
            $status = 'COMPLETED';
        }
        elseif($withdrawal->status == '2'){
            $status = 'PROCESSING';
        }
        return [
            $status,
            $withdrawal->reference,
            $withdrawal->amount,
            $withdrawal->user->firstname.' '.$withdrawal->user->lastname,
            $withdrawal->user->id,
            date('M j, Y', strtotime($withdrawal->created_at)),
        ];
    }

    // this is fine
    public function headings(): array
    {
        return [
            'Status',
            'Reference',
            'Amount',
            'Full Name',
            'User ID',
            'Date',
        ];
    }
}
