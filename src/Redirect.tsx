import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PRODUCTS } from "./constants/products";

export default function Redirects() {
  const [search] = useSearchParams();
  const navigate = useNavigate();
  function gtag(a){window.dataLayer.push(a);}

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    gtag({ 'date': new Date() });
    
    const find = PRODUCTS.find((i) => i.id == search.get("id"));
    gtag({ 'product': find?.id });
    setTimeout(()=>{
        if (find) window.location.href = find.link;
        else window.location.href = PRODUCTS[0].link;
    },3000)
  }, []);

  return <></>;
}
