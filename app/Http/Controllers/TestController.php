<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TestController extends Controller
{
	public function GetBillerProductForm(){

        return [
            [
                'Step'=> 1,
                'ProductId'=> 4,
                'FormId'=> 4,
                'Title'=> 'Please Enter Your Dealer ID',
                'FormField'=> [
                  [
                    'sn'=> 22,
                    'FormId'=> 4,
                    'Label'=> 'Transaction Type',
                    'Name'=> 'ttype',
                    'Type'=> 'list',
                    'DefaultValue'=> 'TOP UP WALLET',
                    'MaxLength'=> 0,
                    'Required'=> 'true',
                    'Readonly'=> null,
                    'Order'=> 2,
                    'RequiredInNextStep'=> 'false',
                    'AmountField'=> null,
                    'FormFieldItem'=> [
                      [
                        'FormFieldId'=> 22,
                        'Label'=> 'TOP UP WALLET',
                        'Value'=> 'TOP UP WALLET'
                      ],
                      [
                        'FormFieldId'=> 22,
                        'Label'=> 'PURCHASE VOUCHER',
                        'Value'=> 'PURCHASE VOUCHER'
                      ]
                    ]
                  ],
                  [
                    'sn'=> 23,
                    'FormId'=> 4,
                    'Label'=> 'Amount',
                    'Name'=> 'amount',
                    'Type'=> 'number',
                    'DefaultValue'=> '',
                    'MaxLength'=> 0,
                    'Required'=> 'true',
                    'Readonly'=> null,
                    'Order'=> 3,
                    'RequiredInNextStep'=> 'true',
                    'AmountField'=> null,
                    'FormFieldItem'=> []
                  ],
                  [
                    'sn'=> 21,
                    'FormId'=> 4,
                    'Label'=> 'Dealer ID',
                    'Name'=> 'phone',
                    'Type'=> 'text',
                    'DefaultValue'=> '',
                    'MaxLength'=> 0,
                    'Required'=> 'true',
                    'Readonly'=> null,
                    'Order'=> 1,
                    'RequiredInNextStep'=> 'true',
                    'AmountField'=> null,
                    'FormFieldItem'=> []
                  ],
                  [
                    'sn'=> 21,
                    'FormId'=> 4,
                    'Label'=> 'Email',
                    'Name'=> 'email',
                    'Type'=> 'text',
                    'DefaultValue'=> '',
                    'MaxLength'=> 0,
                    'Required'=> 'true',
                    'Readonly'=> null,
                    'Order'=> 1,
                    'RequiredInNextStep'=> 'true',
                    'AmountField'=> null,
                    'FormFieldItem'=> []
                  ]
                ]
            ],
            [
                'Step'=> 2,
                'ProductId'=> 4,
                'FormId'=> 5,
                'Title'=> 'Please Enter Amount',
                'FormField'=> [
                  [
                    'sn'=> 24,
                    'FormId'=> 5,
                    'Label'=> 'Dealer ID',
                    'Name'=> 'phone',
                    'Type'=> 'text',
                    'DefaultValue'=> '',
                    'MaxLength'=> 0,
                    'Required'=> 'true',
                    'Readonly'=> null,
                    'Order'=> 1,
                    'RequiredInNextStep'=> 'false',
                    'AmountField'=> null,
                    'FormFieldItem'=> []
                  ],
                  [
                    'sn'=> 25,
                    'FormId'=> 5,
                    'Label'=> 'Name',
                    'Name'=> 'name',
                    'Type'=> 'text',
                    'DefaultValue'=> '',
                    'MaxLength'=> 0,
                    'Required'=> 'true',
                    'Readonly'=> null,
                    'Order'=> 2,
                    'RequiredInNextStep'=> 'false',
                    'AmountField'=> null,
                    'FormFieldItem'=> []
                  ],
                  [
                    'sn'=> 26,
                    'FormId'=> 5,
                    'Label'=> 'Email',
                    'Name'=> 'email',
                    'Type'=> 'email',
                    'DefaultValue'=> '',
                    'MaxLength'=> 0,
                    'Required'=> 'true',
                    'Readonly'=> null,
                    'Order'=> 3,
                    'RequiredInNextStep'=> 'false',
                    'AmountField'=> null,
                    'FormFieldItem'=> []
                  ],
                  [
                    'sn'=> 27,
                    'FormId'=> 5,
                    'Label'=> 'Amount',
                    'Name'=> 'amount',
                    'Type'=> 'text',
                    'DefaultValue'=> '',
                    'MaxLength'=> 0,
                    'Required'=> 'true',
                    'Readonly'=> null,
                    'Order'=> 4,
                    'RequiredInNextStep'=> 'false',
                    'AmountField'=> null,
                    'FormFieldItem'=> []
                  ],
                  [
                    'sn'=> 22,
                    'FormId'=> 4,
                    'Label'=> 'Type of Debit',
                    'Name'=> 'gender',
                    'Type'=> 'list',
                    'DefaultValue'=> 'Direct',
                    'MaxLength'=> 0,
                    'Required'=> 'true',
                    'Readonly'=> null,
                    'Order'=> 2,
                    'RequiredInNextStep'=> 'false',
                    'AmountField'=> null,
                    'FormFieldItem'=> [
                      [
                        'FormFieldId'=> 22,
                        'Label'=> 'Direct',
                        'Value'=> 'Direct'
                      ],
                      [
                        'FormFieldId'=> 22,
                        'Label'=> 'Suspense',
                        'Value'=> 'Suspense'
                      ]
                    ]
                  ]
                ]
            ],
            [
            'Step'=> 3,
            'ProductId'=> 4,
            'FormId'=> 5,
            'Title'=> 'Please Enter Profile',
            'FormField'=> [
              [
                'sn'=> 24,
                'FormId'=> 5,
                'Label'=> 'Fullname',
                'Name'=> 'fullname',
                'Type'=> 'text',
                'DefaultValue'=> '',
                'MaxLength'=> 0,
                'Required'=> 'true',
                'Readonly'=> null,
                'Order'=> 1,
                'RequiredInNextStep'=> 'false',
                'AmountField'=> null,
                'FormFieldItem'=> []
              ],[
                'sn'=> 24,
                'FormId'=> 5,
                'Label'=> 'Age',
                'Name'=> 'age',
                'Type'=> 'number',
                'DefaultValue'=> '',
                'MaxLength'=> 0,
                'Required'=> 'true',
                'Readonly'=> null,
                'Order'=> 1,
                'RequiredInNextStep'=> 'false',
                'AmountField'=> null,
                'FormFieldItem'=> []
              ],
              [
                'sn'=> 22,
                'FormId'=> 4,
                'Label'=> 'Gender',
                'Name'=> 'gender',
                'Type'=> 'list',
                'DefaultValue'=> 'FEMALE',
                'MaxLength'=> 0,
                'Required'=> 'true',
                'Readonly'=> null,
                'Order'=> 2,
                'RequiredInNextStep'=> 'false',
                'AmountField'=> null,
                'FormFieldItem'=> [
                  [
                    'FormFieldId'=> 22,
                    'Label'=> 'FEMALE',
                    'Value'=> 'FEMALE'
                  ],
                  [
                    'FormFieldId'=> 22,
                    'Label'=> 'MALE',
                    'Value'=> 'MALE'
                  ]
                ]
              ]
            ]
        
    ]
        ];
    }
}
