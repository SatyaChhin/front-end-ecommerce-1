import { BrowserRouter , Routes , Route } from "react-router-dom"
import './css/App.css';
import './scss/global.scss';
import AboutPage from "./pages/about/AboutPage";
import CategoryPage from "./pages/category/CategoryPage";
import CustomerPage  from "./pages/customer/CustomerPage";
import ProductPage from "./pages/product/ProductPage";
import RouteNotFound from "./pages/route-not-found/RouteNotFound";
import HomePage from './pages/home/HomePage';
import Layout from "./component/layout/Layout";
import LayoutDashboard from "./component/layout/LayoutDashboard";
import LayoutLogin from "./component/layout/LayoutLogin";
import PageDashboard from "./dashboard-page/dashboard/PageDashboard";
import PageProduct from "./dashboard-page/product/PageProduct";
import PageCategory from "./dashboard-page/category/PageCategory";
import PageOrder from "./dashboard-page/order/PageOrder";
import PageReport from "./dashboard-page/report/PageReport";
import PageCart from "./dashboard-page/cart/PageCart";
import PageCustomer from "./dashboard-page/customer/PageCustomer";
import PageLogin from "./pages/login/loginPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path = "/" element = {<Layout />}>
                  <Route path="" element = { <HomePage/> } />
                  <Route path = '/about' element = { <AboutPage/> } />
                  <Route path = '/category' element = { <CategoryPage/> } />
                  <Route path = '/customer' element = { <CustomerPage/> } />
                  <Route path = '/product' element = { <ProductPage/> } />
                  <Route path = '*' element = { <RouteNotFound/> } />
              </Route>
              <Route path = "/" element = {<LayoutLogin/>}>
                  <Route path = '/login' element = { <PageLogin/> } />
              </Route>
              <Route path="dashboard/" element = { <LayoutDashboard/> }>
                  <Route index element = { <PageDashboard/> } />
                  <Route path = 'product' element = { <PageProduct/> } />
                  <Route path = 'category' element = { <PageCategory/> } />
                  <Route path = 'order' element = { <PageOrder/> } />
                  <Route path = 'report' element = { <PageReport/> } />
                  <Route path = 'customer' element = { <PageCustomer/> } />
                  <Route path = 'cart' element = { <PageCart/> } />
                  <Route path = '' element = { <Layout/> } />
                  <Route path = '*' element = { <RouteNotFound/> } />
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}