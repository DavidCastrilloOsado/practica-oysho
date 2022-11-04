import { Products } from '../../core/models/global-products.models';
import { FilterPricePipe } from './filter-price.pipe';

describe('FilterPricePipe', () => {
  // prices 2599 2299 1999
  const products: Products[] = [
    {
      id: 114219773,
      name: 'Shorts compressive pocket 7cm',
      size: '58',
      class: '',
      color: [
        {
          name: 'NEGRO',
          id: '800',
          image: '/2022/I/3/1/p/0349/206/800/0349206800',
          sizes: [
            {
              name: 'XS',
              price: '2599',
            },
            {
              name: 'XS',
              price: '2599',
            },
            {
              name: 'XS',
              price: '2599',
            },
            {
              name: 'S',
              price: '2599',
            },
            {
              name: 'S',
              price: '2599',
            },
            {
              name: 'M',
              price: '2599',
            },
            {
              name: 'M',
              price: '2599',
            },
            {
              name: 'L',
              price: '2599',
            },
            {
              name: 'XL',
              price: '2599',
            },
            {
              name: 'XL',
              price: '2599',
            },
          ],
        },
        {
          name: 'AZUL ORION',
          id: '468',
          image: '/2022/I/3/1/p/0349/206/468/0349206468',
          sizes: [
            {
              name: 'XS',
              price: '2599',
            },
            {
              name: 'S',
              price: '2599',
            },
            {
              name: 'M',
              price: '2599',
            },
            {
              name: 'L',
              price: '2599',
            },
          ],
        },
      ],
      price: 2599,
      productColor: 'AZUL ORION',
      reference: '30349206-I2022',
      longDescription:
        'Pantalón corto con shorts interior compresivo en tejido moldeador que define y estiliza sin restringir los movimientos. Detalle de bolsillo interior. Con cintura siliconada para mayor efecto plano. Tejido de alta resistencia con protección solar UPF+40.',
      imagepath: '/2022/I/3/1/p/0349/206/468',
      idMedia: '0349206468_4_1_',
      set: 0,
      urlImg:
        'https://static.oysho.net/6/photos2/2022/I/3/1/p/0349/206/468/0349206468_4_1_0.jpg',
    },
    {
      id: 114213717,
      name: 'Hot pants compressive pocket 10 cm',
      size: '58',
      class: '',
      color: [
        {
          name: 'NEGRO',
          id: '800',
          image: '/2022/I/3/1/p/1246/206/800/1246206800',
          sizes: [
            {
              name: 'XS',
              price: '2299',
            },
            {
              name: 'XS',
              price: '2299',
            },
            {
              name: 'S',
              price: '2299',
            },
            {
              name: 'S',
              price: '2299',
            },
            {
              name: 'M',
              price: '2299',
            },
            {
              name: 'L',
              price: '2299',
            },
            {
              name: 'L',
              price: '2299',
            },
            {
              name: 'XL',
              price: '2299',
            },
          ],
        },
      ],
      price: 2299,
      productColor: 'NEGRO',
      reference: '31246206-I2022',
      longDescription:
        'Hot pants 10 cm con cintura alta siliconada para mayor efecto plano. La estructura del tejido permite el paso de la humedad, para mayor confort durante el entrenamiento. Tejido de alta resistencia con protección solar UPF+40. Detalle de bolsillo en el lateral.',
      imagepath: '/2022/I/3/1/p/1246/206/800',
      idMedia: '1246206800_2_9_',
      set: 1,
      urlImg:
        'https://static.oysho.net/6/photos2/2022/I/3/1/p/1246/206/800/1246206800_2_9_1.jpg',
    },
    {
      id: 114223544,
      name: 'Hot pants low rise comfortlux 10 cm',
      size: '58',
      class: '',
      color: [
        {
          name: 'NEGRO',
          id: '800',
          image: '/2022/I/3/1/p/1288/226/800/1288226800',
          sizes: [
            {
              name: 'L',
              price: '1999',
            },
          ],
        },
      ],
      price: 1999,
      productColor: 'NEGRO',
      reference: '31288226-I2022',
      longDescription:
        'Hot pants de tejido suave y ligero de alta elasticidad. Largo de 10 cm con cintura baja. Tejido de alta resistencia con protección solar UPF+40. Estructura de tejido permeable al paso del aire y la humedad.',
      imagepath: '/2022/I/3/1/p/1288/226/800',
      idMedia: '1288226800_4_2_',
      set: 0,
      urlImg:
        'https://static.oysho.net/6/photos2/2022/I/3/1/p/1288/226/800/1288226800_4_2_0.jpg',
    },
  ];
  const priceProducts = products.map(data => data.price);
  let pipe: FilterPricePipe;
  afterEach(() => {
    pipe = new FilterPricePipe();
  });
  it('order array product to asc mode', () => {
    const newArrayaproducts = pipe.transform(products, 'asc', 'price');
    const pricesnewArrayaproducts = newArrayaproducts.map(data => data.price);
    expect(pricesnewArrayaproducts).toStrictEqual([1999, 2299, 2599]);
  });
  it('order array product to desc mode', () => {
    const newArrayaproducts = pipe.transform(products, 'desc', 'price');
    const pricesnewArrayaproducts = newArrayaproducts.map(data => data.price);
    expect(pricesnewArrayaproducts).toStrictEqual([2599, 2299, 1999]);
  });
  it('return value incorrect param asociation', () => {
    const newArrayaproducts = pipe.transform(products, 'error', 'price');
    expect(newArrayaproducts).not.toBe(priceProducts);
  });
});
