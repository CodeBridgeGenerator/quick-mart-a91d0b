import AppSideBar from "./appSideBar/AppSideBar.js";

/*

import ProductsPage from "../ProductsPage/ProductsPage";
import CustomerPage from "../CustomerPage/CustomerPage";
import AdminPage from "../AdminPage/AdminPage";
import SupplierPage from "../SupplierPage/SupplierPage";
import ItemPage from "../ItemPage/ItemPage";
import OrderPage from "../OrderPage/OrderPage";
import AddressPage from "../AddressPage/AddressPage";
import SupermarketPage from "../SupermarketPage/SupermarketPage";
import OrderItemPage from "../OrderItemPage/OrderItemPage";
import CategoryPage from "../CategoryPage/CategoryPage";
import CouponPage from "../CouponPage/CouponPage";
import TaxPage from "../TaxPage/TaxPage";
import SupportTicketPage from "../SupportTicketPage/SupportTicketPage";
~cb-add-import~

~cb-add-services-card~

case "products":
                return <ProductsPage />;
case "customer":
                return <CustomerPage />;
case "admin":
                return <AdminPage />;
case "supplier":
                return <SupplierPage />;
case "item":
                return <ItemPage />;
case "order":
                return <OrderPage />;
case "address":
                return <AddressPage />;
case "supermarket":
                return <SupermarketPage />;
case "orderItem":
                return <OrderItemPage />;
case "category":
                return <CategoryPage />;
case "coupon":
                return <CouponPage />;
case "tax":
                return <TaxPage />;
case "supportTicket":
                return <SupportTicketPage />;
~cb-add-thurthy~

*/

const AppLayout = (props) => {
  const { children, activeKey, activeDropdown } = props;

  return (
    <div className="flex min-h-[calc(100vh-5rem)] mt-20 bg-white">
      <AppSideBar activeKey={activeKey} activeDropdown={activeDropdown} />
      <div className="flex-1 ml-2">{children}</div>
    </div>
  );
};

export default AppLayout;
