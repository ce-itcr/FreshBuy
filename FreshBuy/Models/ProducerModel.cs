using FreshBuy.src;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FreshBuy.Models
{
    public class ProducerModel : DataRequests
    {
        //Products Management
        public bool create_product(int product_id, int id, String name, String category, String sale_mode, int availability, int price) { return true; }
        public bool update_product(int product_id, int id, String name, String category, String sale_mode, int availability, int price) { return true; }
        public bool delete_product(int product_id) { return true; }

        //Orders Management
        public String[] find_order(int id) { return null; }
        public String complete_order(int id, String msj) { return null; }
    }
}