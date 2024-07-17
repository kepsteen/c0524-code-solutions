select "firstName",
       "lastName",
  from "customers"
  join "payments" using ("customerId");
