<?php

namespace App\Exports;

use App\Models\Deposit;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;

class DepositsExport implements FromCollection, WithMapping, WithHeadings
{
    use Exportable;

    // a place to store the deposits dependency
    private $deposits;

    // use constructor to handle dependency injection
    public function __construct($deposits)
    {
        $this->deposits = $deposits;
    }
    
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return $this->deposits;
    }

    public function map($deposit): array
    {
        $status = 'PENDING';
        if($deposit->status == '4'){
            $status = 'DECLINED';
        }
        elseif($deposit->status == '3'){
            $status = 'APPROVED';
        }
        elseif($deposit->status == '2'){
            $status = 'PROCESSING';
        }
        return [
            $status,
            $deposit->reference,
            $deposit->amount,
            $deposit->user->firstname.' '.$deposit->user->lastname,
            $deposit->user->id,
            date('M j, Y', strtotime($deposit->created_at)),
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
