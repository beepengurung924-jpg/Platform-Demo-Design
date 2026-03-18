
import { Switch, Route } from "wouter";
import Landing from "./pages/Landing";
import Listings from "./pages/listings/Listings";
import ListingDetail from "./pages/listings/ListingDetail";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/listings" component={Listings} />
      <Route path="/listings/:id" component={ListingDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return <Router />;
}

export default App;
