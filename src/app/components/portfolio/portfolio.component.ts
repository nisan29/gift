import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";

@Component({
    selector: 'portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

    public gridData: any[] = [
        {
            SecurityName: 'אאורה',
            Symbol: 'אאורה',
            SecurityId: 373019,
            SecurityType: 'מניות',
            ClosingPrice: 487.50,
            PercentageChange: '0.41%',
            LastTransactionTime: 'סוף יום',
            SecuritiesAmount: 15,
            ManagingBank: 'לאומי',
            AccountNumber: '459-6565'
        },
        {
            SecurityName: 'אאורה אגח י',
            Symbol: 'אארה.ק10',
            SecurityId: 3730413,
            SecurityType: 'איגרות חוב',
            ClosingPrice: 101.72,
            PercentageChange: '0.04%',
            LastTransactionTime: 'סוף יום',
            SecuritiesAmount: 30,
            ManagingBank: 'לאומי',
            AccountNumber: '459-6565'
        },
        {
            SecurityName: 'אאורה',
            Symbol: 'אאורה',
            SecurityId: 373019,
            SecurityType: 'מניות',
            ClosingPrice: 487.50,
            PercentageChange: '0.41%',
            LastTransactionTime: 'סוף יום',
            SecuritiesAmount: 15,
            ManagingBank: 'לאומי',
            AccountNumber: '459-6565'
        },
        {
            SecurityName: 'אאורה אגח י',
            Symbol: 'אארה.ק10',
            SecurityId: 3730413,
            SecurityType: 'איגרות חוב',
            ClosingPrice: 101.72,
            PercentageChange: '0.04%',
            LastTransactionTime: 'סוף יום',
            SecuritiesAmount: 30,
            ManagingBank: 'לאומי',
            AccountNumber: '459-6565'
        },
        {
            SecurityName: 'אאורה',
            Symbol: 'אאורה',
            SecurityId: 373019,
            SecurityType: 'מניות',
            ClosingPrice: 487.50,
            PercentageChange: '0.41%',
            LastTransactionTime: 'סוף יום',
            SecuritiesAmount: 15,
            ManagingBank: 'לאומי',
            AccountNumber: '459-6565'
        },
        {
            SecurityName: 'אאורה אגח י',
            Symbol: 'אארה.ק10',
            SecurityId: 3730413,
            SecurityType: 'איגרות חוב',
            ClosingPrice: 101.72,
            PercentageChange: '0.04%',
            LastTransactionTime: 'סוף יום',
            SecuritiesAmount: 30,
            ManagingBank: 'לאומי',
            AccountNumber: '459-6565'
        },
        {
            SecurityName: 'אאורה',
            Symbol: 'אאורה',
            SecurityId: 373019,
            SecurityType: 'מניות',
            ClosingPrice: 487.50,
            PercentageChange: '0.41%',
            LastTransactionTime: 'סוף יום',
            SecuritiesAmount: 15,
            ManagingBank: 'לאומי',
            AccountNumber: '459-6565'
        },
        {
            SecurityName: 'אאורה אגח י',
            Symbol: 'אארה.ק10',
            SecurityId: 3730413,
            SecurityType: 'איגרות חוב',
            ClosingPrice: 101.72,
            PercentageChange: '0.04%',
            LastTransactionTime: 'סוף יום',
            SecuritiesAmount: 30,
            ManagingBank: 'לאומי',
            AccountNumber: '459-6565'
        }
    ];

    public gridView: GridDataResult | undefined;
    public pageSize = 5;
    public skip = 0;
    private items: any[] = this.gridData;

    constructor(private fb: FormBuilder) {
        this.loadItems();
    }

    public pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }

    private loadItems(): void {
        this.gridView = {
            data: this.items.slice(this.skip, this.skip + this.pageSize),
            total: this.items.length,
        };
    }


    public min: Date = new Date(1917, 0, 1);
    public max: Date = new Date(2020, 4, 31);

    public registerForm: FormGroup = new FormGroup({
        SecurityId: new FormControl(''),
        SecurityName: new FormControl(''),
        SecuritiesAmount: new FormControl(''),
        ManagingBank: new FormControl(''),
        AccountNumber: new FormControl('')
    });

    public submitForm(): void {
        this.registerForm.markAllAsTouched();
        console.log('   this.registerForm.value: ', this.registerForm.value);
    }

    public clearForm(): void {
        console.log('   this.registerForm.value: ', this.registerForm.value);
        this.registerForm.reset();
    }

}