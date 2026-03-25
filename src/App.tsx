import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfUse from "@/pages/TermsOfUse";
import Accessibility from "@/pages/Accessibility";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/politica-de-privacidad" component={PrivacyPolicy} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terminos-de-uso" component={TermsOfUse} />
      <Route path="/terms-of-use" component={TermsOfUse} />
      <Route path="/accesibilidad" component={Accessibility} />
      <Route path="/accessibility" component={Accessibility} />
      <Route component={Home} />
    </Switch>
  );
}
