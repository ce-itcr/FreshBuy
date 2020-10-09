using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FreshBuy.src.Entities
{
    public class Consumer
    {
        public int person_id;
        public String name;
        public String last_name;
        public String province;
        public String canton;
        public String district;
        public String birth_date;
        public int phone_number;
        public int sinpe_number;
        public String password;

        public Consumer() { }
    }
}