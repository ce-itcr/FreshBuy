using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend_FreshBuy.DBMS.Entities
{
    public class Producer
    {

        public int id_producer;
        public String name;
        public String last_name;
        public String residence;
        public String province;
        public String canton;
        public String district;
        public int phone_number;
        public int sinpe_number;
        public String birth_date;
        public String[] delivery_locations;

        public Producer() { }
      
    }
}
