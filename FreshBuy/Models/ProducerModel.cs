using FreshBuy.src;
using FreshBuy.src.Entities;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace FreshBuy.Models
{
    public class ProducerModel : DataRequests
    {
        //Products Management

        /// <summary>
        /// Method that creates a product entity
        /// </summary>
        /// <param name="product_id"></param>
        /// <param name="product_name"></param>
        /// <param name="category"></param>
        /// <param name="category_id"></param>
        /// <param name="sale_mode"></param>
        /// <param name="availability"></param>
        /// <param name="price"></param>
        /// <param name="photo"></param>
        /// <param name="producer_id"></param>
        /// <returns></returns>
        public bool create_product(int product_id, String product_name, String category, int category_id, String sale_mode, int availability, int price, String photo, int producer_id)
        {
            if (SELECT(products_path, product_id) == null)
            {
                Product product = new Product();

                product.product_id = product_id;
                product.product_name = product_name;
                product.category = category;
                product.category_id = category_id;
                product.sale_mode = sale_mode;
                product.availability = availability;
                product.price = price;
                product.photo = photo;
                product.producer_id = producer_id;


                INSERT(products_path, JsonConvert.SerializeObject(product));

                return true;
            }
            return false;
        }


        /// <summary>
        /// Method that updates a product entity
        /// </summary>
        /// <param name="product_id"></param>
        /// <param name="product_name"></param>
        /// <param name="category"></param>
        /// <param name="category_id"></param>
        /// <param name="sale_mode"></param>
        /// <param name="availability"></param>
        /// <param name="price"></param>
        /// <param name="photo"></param>
        /// <param name="producer_id"></param>
        /// <returns></returns>
        public bool update_product(int product_id, String product_name, String category, int category_id, String sale_mode, int availability, int price, String photo, int producer_id)
        {
            if (SELECT(products_path, product_id) != null)
            {
                if (SELECT(categories_path, product_id) != null)
                {
                    UPDATE(products_path, product_id, "product_name", product_name, 0);
                    UPDATE(products_path, product_id, "sale_mode", sale_mode, 0);
                    UPDATE(products_path, product_id, "availability", null, availability);
                    UPDATE(products_path, product_id, "price", null, price);
                    UPDATE(products_path, product_id, "photo", photo, 0);
                    return true;
                }
                return false;
            }
            return false;
        }

        /// <summary>
        /// Method that delete a product entity
        /// </summary>
        /// <param name="product_id"></param>
        /// <returns></returns>
        public bool delete_product(int product_id)
        {
            return DELETE(products_path, product_id);
        }

        //Orders Management
        public String[] find_order(int id) { return null; }
        public String complete_order(int id, String msj) { return null; }
    }
}