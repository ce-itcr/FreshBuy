using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FreshBuy.src.Entities
{
    public class Product : Category
    {
        public int product_id;
        public String product_name;
        public String category;
        public int category_id;
        public String sale_mode;
        public int availability;
        public int price;
        public String photo;
        public int producer_id;

        public Product() { }
    }
}