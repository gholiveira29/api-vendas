import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/Products';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  public async findByName(name: string): Promise<Product | undefined> {
    const prodduct = this.findOne({
      where: {
        name,
      },
    });

    return prodduct;
  }
}
