import { Products } from 'src/app/core/models/global-products.models';
import { ColorApy, ProductsApy, SizeApy } from 'src/app/core/models/products-apy.models';
import { GLOBAL_URL } from '../../../../environments/environment';


export class TransformDataToProductsHelper  {

  

  
  static transformDataToProducts(data: ProductsApy): Products {
    let elmPrice: number = 0;
    let elmColor: string = '';
    let elmClass: string = '';
    return {
      id: data.id,
      name: data.name,
      size: data.sizeSystem,
      class: elmClass,
      color: data.detail?.colors?.map((elm: ColorApy) => {
        elmColor = elm.name;
        return {
          name: elm.name,
          id: elm.id,
          image: elm.image?.url,
          sizes: elm.sizes
            .filter((elm: SizeApy) => elm.visibilityValue === 'SHOW')
            .map((elm: SizeApy) => {
              elmPrice = parseInt(elm.price);
              return { name: elm.name, price: elm.price };
            }),
        };
      }),
      price: elmPrice,
      productColor: elmColor,
      reference: data.detail?.reference,
      longDescription: data.detail?.longDescription,
      imagepath: data.detail?.xmedia[0].path,
      idMedia: data.detail?.xmedia[0].xmediaItems[0].medias[0].idMedia,
      set: data.detail?.xmedia[0].xmediaItems[0].set,
      urlImg: `${GLOBAL_URL.baseUrlImage}${data.detail.xmedia[0].path}/${data.detail.xmedia[0].xmediaItems[0].medias[0].idMedia}${data.detail.xmedia[0].xmediaItems[0].set}.jpg`,
    };
  }
}
