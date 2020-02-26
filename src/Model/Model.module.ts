import { RestDataSource } from './rest.datasource';
import { AuthService } from './auth.service';
import { ProductRepository} from './product.repository';
import{ StaticDataSource} from './static.datasource';
import { NgModule} from '@angular/core';
import { Cart } from 'src/app/store/cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { HttpClientModule } from '@angular/common/http';

@NgModule(
    {
        imports : [HttpClientModule],
        providers:[ProductRepository, 
            Order,OrderRepository, Cart,
        {
            provide : StaticDataSource, useClass : RestDataSource
        }, RestDataSource, AuthService]
    }
)

export class ModelModule 
{
    

}