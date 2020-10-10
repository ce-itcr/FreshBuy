using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FreshBuy.src.Entities
{
    public class Producer
    {
        public int person_id;
        public String name;
        public String last_name;
        public String province;
        public String canton;
        public String district;
        public String birth_date;
        public double phone_number;
        public double sinpe_number;
        public String[] delivery_locations;
        public String username;
        public String password;

        public Producer() { }

    }
}