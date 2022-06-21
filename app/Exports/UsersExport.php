<?php

namespace App\Exports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;

class UsersExport implements FromCollection, WithMapping, WithHeadings
{
    use Exportable;

    // a place to store the users dependency
    private $users;

    // use constructor to handle dependency injection
    public function __construct($users)
    {
        $this->users = $users;
    }

    // set the collection of members to export
    public function collection()
    {
        return $this->users;
    }

    // map what a single member row should look like
    // this method will iterate over each collection item
    public function map($member): array
    {
        return [
            $member->firstname.' '.$member->lastname,
            $member->phone,
            $member->email,
            $member->created_at,
        ];
    }

    // this is fine
    public function headings(): array
    {
        return [
            'Full Name',
            'Phome Number',
            'Email',
            'Joined Date',
        ];
    }
}
