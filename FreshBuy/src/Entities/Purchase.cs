using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FreshBuy.src.Entities
{
    public class Purchase
    {
        public int id_consumer;
        public String purchase_id;
        public String purchase_date;
        public String delivery_address;
        public int qualification;
        public String feedback;
        public int total_purchase_amount;
        public String[] products;

        public Purchase() { }
    }
}