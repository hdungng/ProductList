import { Category } from '../models/category.model';

export class CategoriesService {
  categories: Category[] = [
    new Category(1, 'Birthday Cake'),
    new Category(2, 'Normal Cake'),
    new Category(3, 'Quality Cake'),
  ];
}
