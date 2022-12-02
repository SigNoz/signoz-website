import React, { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Image from "./components/Image";
import CustomLink from "./components/Link";
import { TocHeadingProps } from "./components/TOCInline";
import Pre from "./components/Pre";
import Paragraph from "./components/Paragraph";
import Heading from "./components/Heading";
import OL from "./components/OL";
import UL from "./components/UL";
import LI from "./components/LI";
import Table from "./components/Table";
import th from "./components/th";
import Code from "./components/Code";
import TOCInline from "./components/TOCInline";
import Youtube from "./components/Youtube";
import ZoomImage from "./components/ZoomImage";
import tr from "./components/tr";
import DocList from "./components/Doc";
import ContributorHighlight from "./components/ContributorHighlight";
import BlockQuote from "./components/blockquote";

import { FrontMatterProps } from "lib/mdx";
import { AuthorDetails } from "../../../pages/blog/[...slug]";
import Accordion from "components/Accordion";

// Shared Components
import CHClientWithOutput from "./components/Shared/ch-client-with-output";
import GetHelp from "./components/Shared/get-help";
import UpgradeInfo from "./components/Shared/helm-upgrade-info";
import InstallSigNozPart1 from "./components/Shared/install-signoz-k8s-part-1";
import InstallSigNozPart2 from "./components/Shared/install-signoz-k8s-part-2";
import InstrumentationFAQ from "./components/Shared/instrumentation-faq";
import K8sComponents from "./components/Shared/k8s-components";
import K8sHotrod from "./components/Shared/k8s-hotrod";
import StorageClass from "./components/Shared/k8s-storageclass";
import CommonPrerequisites from "./components/Shared/k8s-common-prerequisites";
import VerifyInstallation from "./components/Shared/k8s-verify-installation";
import OtelOperatorOTLPEndpoint from "./components/Shared/otel-operator-otlp-endpoint";
import OtelOperatorCleanUp from "./components/Shared/otel-operator-cleanup";
import OtelOperatorAutoInstrumentation from "./components/Shared/otel-operator-auto-instrumentation";
import OtelOperatorPetClinic from "./components/Shared/otel-operator-pet-clinic";

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  p: Paragraph,
  h1: (props: any) => <Heading {...props} type="h1" />,
  h2: (props: any) => <Heading {...props} type="h2" />,
  h3: (props: any) => <Heading {...props} type="h3" />,
  h4: (props: any) => <Heading {...props} type="h4" />,
  h5: (props: any) => <Heading {...props} type="h5" />,
  h6: (props: any) => <Heading {...props} type="h6" />,
  code: Code,
  Youtube,
  ZoomImage,
  ol: OL,
  ul: UL,
  li: LI,
  table: Table,
  th,
  tr,
  DocList,
  ContributorHighlight,
  blockquote: BlockQuote,
  Accordion: Accordion,
  CHClientWithOutput: CHClientWithOutput,
  GetHelp: GetHelp,
  UpgradeInfo: UpgradeInfo,
  InstallSigNozPart1:InstallSigNozPart1,
  InstallSigNozPart2: InstallSigNozPart2,
  InstrumentationFAQ: InstrumentationFAQ,
  K8sComponents: K8sComponents,
  K8sHotrod: K8sHotrod,
  StorageClass: StorageClass,
  CommonPrerequisites: CommonPrerequisites,
  VerifyInstallation: VerifyInstallation,
  OtelOperatorOTLPEndpoint: OtelOperatorOTLPEndpoint,
  OtelOperatorCleanUp: OtelOperatorCleanUp,
  OtelOperatorAutoInstrumentation: OtelOperatorAutoInstrumentation,
  OtelOperatorPetClinic: OtelOperatorPetClinic
};

interface MDXLayoutProps {
  prev: null | FrontMatterProps;
  next: null | FrontMatterProps;
  frontmatter: FrontMatterProps;
  authorDetails: AuthorDetails[];
  mdxSource: string;
  toc: TocHeadingProps["toc"];
}

export const MDXLayoutRenderer = ({ mdxSource, ...rest }: MDXLayoutProps) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout components={MDXComponents} {...rest} />;
};
