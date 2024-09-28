import Chart from "@/components/template/Chart";
import EmailStyles from "@/components/template/EmailStyles";
import Hero from "@/components/template/Hero";
import { Body, Html, Tailwind } from "@react-email/components";
import * as React from "react";

const { fontPoppins, gradient } = EmailStyles();

export default function TemplateResultado() {
  return (
    <Tailwind>
      <Html lang="pt-br">
        <Body style={fontPoppins} className="w-full m-0">
          <style>
            @import
            url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
          </style>
          <div className="max-w-[1140px] mx-auto p-4 flex flex-col gap-24">
            <Hero />
            <Chart />
          </div>
        </Body>
      </Html>
    </Tailwind>
  );
}
