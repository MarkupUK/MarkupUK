fil = new Array();
fil["0"]= "L1040.html@@@Semantics@@@...";
fil["1"]= "L112.html@@@Requirements@@@...";
fil["2"]= "L150.html@@@The Structure of a Module@@@...";
fil["3"]= "L218.html@@@Processing@@@...";
fil["4"]= "L256.html@@@Example@@@...";
fil["5"]= "L312.html@@@Example@@@...";
fil["6"]= "L403.html@@@Example@@@...";
fil["7"]= "L46.html@@@Contents@@@...";
fil["8"]= "L469.html@@@A Larger Example@@@...";
fil["9"]= "L48.html@@@Introduction@@@...";
fil["10"]= "L507.html@@@Conclusion@@@...";
fil["11"]= "L648.html@@@References@@@...";
fil["12"]= "L96.html@@@Naming and renaming@@@...";
fil["13"]= "apa.html@@@Invisible XML Grammar for a DOCTYPE declaration@@@...";
fil["14"]= "apc.html@@@Samples@@@...";
fil["15"]= "ar02.html@@@From iXML to XSpec@@@In the autumn of 2024, I attended the XML Summer School and persuaded (it wasn\u2019t difficult) Stephen Pemberton to tack a session on iXML onto the end of his course on XForms. On the bus home, I made a start on my first iXML grammar. Within a week I had encountered a character encoding mystery and whitespace challenges, lost a day naming things and was working on repurposing XSpec for testing iXML grammars. This paper: outlines my learning journey, as a case study; highlights existing methods for tesing iXML; and summarises how I adapted XSpec for testing iXML...";
fil["16"]= "ar02s01.html@@@Introduction@@@...";
fil["17"]= "ar03.html@@@XForms Extended@@@The web scene has exploded in the last couple of decades, transitioning from static web pages to dynamic, responsive web applications. Facilitating that are frameworks like React, Vue, Svelte, and Angular that prioritize user experience, component-based architecture, and seamless integration with modern APIs, without sacrificing the developer experience. Meanwhile, XForms, while powerful for data-centric applications, has for the most part fallen behind. Its development has not caught up with these rapid changes, leaving a growing gap in terms of modern UI/UX capabilities, component flexibility, and integration with the wider web development ecosystem. This disparity is not just a matter of preference; it risks XForms becoming irrelevant. While the development of XForms 2.0 is ongoing, the progress has been undeniably slow, inviting a different approach to address these issues rather than waiting for the eventual arrival of XForms 2.0. The web is not waiting for XForms, and the momentum behind competing technologies continues to build. We think that leveraging existing web technologies to address the most pressing limitations of current XForms might be a more beneficial approach. The idea we came up with is to use a syntax similar to XForms (let&apos;s call it Extended XForms for now), which then will be converted to XForms code. This syntax will extend the original one in three ways:Style extension this makes minor or no changes to the XML code, but introduces new CSS styles, mostly for layouts, but also for theming when needed.Basic extension: the simple and concise syntax of Extended XForms is converted to regular XForms, which then can be used as any other XForms document. These extra functionalities can be done in pure XForms but will be complex and difficult to implement and maintain.This may also introduce extra JavaScript code for extra functionalities.Functional extension this provides additional functionality not currently in XForms, commonly to read data directly from XForms models, write data, and listen to changes.Functional extensions depend on the XForms renderer and will not work in the same way for all XForms implementations...";
fil["18"]= "ar03s01.html@@@Introduction@@@...";
fil["19"]= "ar03s02.html@@@The problem@@@...";
fil["20"]= "ar03s02s01.html@@@Issue #1: Cumbersome layouts@@@...";
fil["21"]= "ar03s02s02.html@@@Issue #2: Complex logic@@@...";
fil["22"]= "ar03s02s03.html@@@Issue #3: The need for advanced JavaScript code@@@...";
fil["23"]= "ar03s03.html@@@The proposed solution:@@@...";
fil["24"]= "ar03s03s01.html@@@XForms code@@@...";
fil["25"]= "ar03s03s02.html@@@JavaScript and CSS code@@@...";
fil["26"]= "ar03s03s03.html@@@Extended XForms Components@@@...";
fil["27"]= "ar03s04.html@@@Weaknesses and Limitations@@@...";
fil["28"]= "ar03s05.html@@@What&apos;s next@@@...";
fil["29"]= "ar04.html@@@Processing JSON with Template Rules@@@This paper describes a case study exploring how effective the current design of XSLT 4.0 is in processing JSON files with a recursive structure, using the rule-based recursive descent design pattern familiar to XSLT users. It explores the conversion of an existing non-trivial XSLT-based application (a transpiler that converts Java source code to C#) to see how well it would be able to cope if the input were JSON rather than XML. The exercise has led to a number of changes in the proposed features of XSLT 4.0, and identifies other areas where the design could be further improved...";
fil["30"]= "ar04s01.html@@@Introduction@@@...";
fil["31"]= "ar04s02.html@@@Selecting the case study@@@...";
fil["32"]= "ar04s03.html@@@Converting the input XML to JSON@@@...";
fil["33"]= "ar04s04.html@@@Serializing the parse tree@@@...";
fil["34"]= "ar04s05.html@@@Generating the digest file@@@...";
fil["35"]= "ar04s06.html@@@Refining the digest@@@...";
fil["36"]= "ar04s07.html@@@Conclusions@@@...";
fil["37"]= "ar05.html@@@Schema Test Suite@@@This paper examines the need for stronger foundations in XML schema design, particularly when working with complex content models such as DocBook, TEI, or VRAVisual Resources Association, a metadata schema.. These models are based on element and attribute relationships, requiring validation scenarios that enforce structural and semantic accuracy. While significant effort goes into developing schemas to represent these complex models, their accuracy in capturing data requirements is often assumed. To address this, the Content Architecture team at Bloomsbury Publishing have introduced a unit test-driven methodology for validating the structural integrity of Bloomsbury XML schemas. Our initial implementation of this schema test suite has proven effective in supporting schema modifications by providing reliable feedback to verify the reliability of our schemas...";
fil["38"]= "ar05s01.html@@@Introduction@@@...";
fil["39"]= "ar05s01s01.html@@@Structural Validation vs. Schematron@@@...";
fil["40"]= "ar05s01s02.html@@@Schema Languages@@@...";
fil["41"]= "ar05s02.html@@@Schema Test Suite@@@...";
fil["42"]= "ar05s02s01.html@@@Unit Testing Methodology@@@...";
fil["43"]= "ar05s02s02.html@@@Test Cases@@@...";
fil["44"]= "ar05s02s02s01.html@@@Folder Directory Hierarchy@@@...";
fil["45"]= "ar05s02s02s02.html@@@Templates@@@...";
fil["46"]= "ar05s02s02s03.html@@@Passing XML@@@...";
fil["47"]= "ar05s02s02s04.html@@@Failing XML@@@...";
fil["48"]= "ar05s02s03.html@@@Implementation and Execution@@@...";
fil["49"]= "ar05s02s03s01.html@@@Tools and Libraries@@@...";
fil["50"]= "ar05s02s03s02.html@@@Execution Logic@@@...";
fil["51"]= "ar05s02s03s03.html@@@Reporting@@@...";
fil["52"]= "ar05s03.html@@@Conclusion@@@...";
fil["53"]= "ar05s03s01.html@@@Continuous Development@@@...";
fil["54"]= "ar05s03s02.html@@@Integration@@@...";
fil["55"]= "ar05s03s03.html@@@Accessibility@@@...";
fil["56"]= "ar06.html@@@Design and Performance of a Corpus Scanner@@@People working with large collections of XML documents often need to know specific characteristics of the documents in the collection in aggregate. For example, an attribute value that only occurs once in a million documents might warrant investigation; an element that was expected but that does not occur anywhere might similarly suggest a problem. People designing transformations or style sheets might find it useful to handle the most commonly occurring elements first. FreqX is an XSLT-based tool that summarizes the various elements, attributes, attribute values, and other details in a collection of XML documents. It can produce several different report formats, including an HTML Web page, a CSV file for a spreadsheet, and of course XML data. It has been run on collections containing tens of thousands of documents, running into tens of gigabytes of XML. Unfortunately, early versions of the tool used large amounts of memory\u2014several times more memory than the actual scanned documents occupied. This made the tool unsuitable for one of its design goals. Recently, the FreqX tool has been improved so that it runs more quickly and uses much less memory. This paper describes some of the design decisions that were made both in the creation of FreqX and in the subsequent revision, and also the process of making the tool support large amounts of data. The tool is written in XSLT 3, and makes use of a number of XPath and XSLT features introduced in that version. Some of these are discussed in the paper. FreqX is publicly available, including full source code, with original development funded by Mulberry Technologies. Suggestions for additional features, as well as reports of problems, are welcomed: the tool is actively maintained. The result of the improvements was a reduction in memory usage from over sixty gigabytes to less than three gigabytes when processing the Early English Books Online corpus of some fifty-three thousand TEI-based XML documents, and a reduction in time from almost six hours before a crash down to between thirty and forty-five minutes with successful output, running in both cases with Saxon 9 on a decade-old computer...";
fil["57"]= "ar06s01.html@@@Introduction@@@...";
fil["58"]= "ar06s02.html@@@Tool Requirements and Features@@@...";
fil["59"]= "ar06s02s01.html@@@Easy to configure and run@@@...";
fil["60"]= "ar06s02s02.html@@@Convenient to provide inputs@@@...";
fil["61"]= "ar06s02s03.html@@@Produce multiple forms of report@@@...";
fil["62"]= "ar06s02s04.html@@@Combine multiple runs into a single report@@@...";
fil["63"]= "ar06s02s05.html@@@Robust against parse errors@@@...";
fil["64"]= "ar06s02s06.html@@@Extensible and Maintainable@@@...";
fil["65"]= "ar06s04.html@@@Memory Usage and Speed@@@...";
fil["66"]= "ar06s05.html@@@Parsing Errors@@@...";
fil["67"]= "ar06s06.html@@@Extensibility@@@...";
fil["68"]= "ar06s07.html@@@Future Work@@@...";
fil["69"]= "ar06s08.html@@@Conclusion@@@...";
fil["70"]= "ar07s01.html@@@Introduction@@@...";
fil["71"]= "ar07s02.html@@@Enter Selenium@@@...";
fil["72"]= "ar07s03.html@@@Enter Invisible XML@@@...";
fil["73"]= "ar07s04.html@@@cx:selenium@@@...";
fil["74"]= "ar07s05.html@@@Security implications@@@...";
fil["75"]= "ar07s06.html@@@Next steps@@@...";
fil["76"]= "ar08.html@@@PrintCSS Meets LaTeX@@@...";
fil["77"]= "ar08s01.html@@@Introduction@@@...";
fil["78"]= "ar08s02.html@@@The Status Quo: Configuring Layouts in xerif@@@...";
fil["79"]= "ar08s03.html@@@PrintCSS and TeX@@@...";
fil["80"]= "ar08s04.html@@@Building a PrintCSS renderer@@@...";
fil["81"]= "ar08s04s01.html@@@Preliminary Considerations@@@...";
fil["82"]= "ar08s04s02.html@@@Parsing PrintCSS@@@...";
fil["83"]= "ar08s04s03.html@@@Generating an xml2tex Configuration@@@...";
fil["84"]= "ar08s05.html@@@Summary, Discussion and Future Work@@@...";
fil["85"]= "ar08s06.html@@@Appendix\u202FI: Supported PrintCSS Features@@@...";
fil["86"]= "ar08s07.html@@@Appendix II: Supported Standard CSS Features@@@...";
fil["87"]= "ar09.html@@@Adding new Cars to a Running Train@@@The Journal Article Tag Suite (JATS) is the ANSI/NISO standard that is defines the tag set used to archive, exchange, and publish journal articles worldwide. JATS 1.4 was approved (as JATS version 1.4 ANSI/NISO Z39.96-2024) on October 31, 2024. The most exciting new capability added in JATS 1.4 is a way to encode multi-language journal articles. JATS defines a multi-language article not merely as an article written in English or German with a couple of quotations in Latin or French. A true multilingual article contains substantial portions of the content written and presented in more than one language or contains some parts in one language and other parts in a different language or languages. The JATS tag set has always been able to encode articles in any language and to identify portions of an article that are in a different language from the containing article (using @xml:lang). However, JATS has not, until version 1.4, been able to encode (in a graceful way) articles that are in whole or large-part multilingual. The JATS multi-language mechanism harks back to Architectural Forms, and is implemented mostly using attributes, which can identify: an entire article in 2 or more languagessubstantial portions of content (paragraphs and sections) replicated in 2 or more languagesblock structures (such as figures, tables, and equations) replicated in 2 or more languagesarticles where some of the content is in one language and some in another, and article metadata (such as the article title or abstract) in multiple languages. This paper describes the encoding available for many styles of multi-language functionality, provides examples, lists useful resources to learn more, and gives a few reasons why this mechanism may be of interest to you, even if you or your clients do not code in JATS or work with journal articles...";
fil["88"]= "ar09s01.html@@@What is JATS?@@@...";
fil["89"]= "ar09s02.html@@@Requirements and Constraints@@@...";
fil["90"]= "ar09s02s01.html@@@How Multi-language Documents are Presented and Stored@@@...";
fil["91"]= "ar09s02s02.html@@@Requirements and Non-Requirements@@@...";
fil["92"]= "ar09s02s02s01.html@@@Backwards Compatibility@@@...";
fil["93"]= "ar09s02s02s02.html@@@The Needs of the Few Must Not Burden the Many@@@...";
fil["94"]= "ar09s02s02s03.html@@@JATS Should Stay In It&apos;s Lane@@@...";
fil["95"]= "ar09s03.html@@@I Don&apos;t Use JATS; Why Should I Care?@@@...";
fil["96"]= "ar09s04.html@@@JATS Multi-language Mechanism (@lang-group)@@@...";
fil["97"]= "ar09s04s01.html@@@Influence of SGML&apos;s \u201CArchitectural Forms\u201D: Giving Credit where Credit is Due@@@...";
fil["98"]= "ar09s05.html@@@A Few Examples@@@...";
fil["99"]= "ar09s05s01.html@@@Simple Example of a Language Group@@@...";
fil["100"]= "ar09s05s02.html@@@Did a Person or an Algorithm Translate This?@@@...";
fil["101"]= "ar09s05s03.html@@@Not Everything Should be Translated@@@...";
fil["102"]= "ar09s06.html@@@Doesn&apos;t This Mechanism Entail a Lot of Overhead?@@@...";
fil["103"]= "ar09s07.html@@@Documentation for All This@@@...";
fil["104"]= "ar09s08.html@@@Acknowledgements@@@...";
fil["105"]= "automation.html@@@Automation@@@...";
fil["106"]= "conclusion.html@@@Conclusion@@@...";
fil["107"]= "customizations.html@@@Implementation@@@...";
fil["108"]= "diffing.html@@@Diff@@@...";
fil["109"]= "eyeballing.html@@@Eyeballing the output@@@...";
fil["110"]= "learning-ixml.html@@@Learning iXML@@@...";
fil["111"]= "markupuk2025.html@@@Surfing the web with XProc@@@XProc 3.1 comes with many great features for surfing the web. The p:document instruction will load XML, HTML, or JSON documents. The p:http-request step allows a pipeline author to interact with web services. It supports many HTTP methods, query parameters, content negotiation, and single and multipart request and response bodies. But what about web applications? Web pages that rely on client-side processing, with XSLT using SaxonJS, for example, or just plain old Javascript, present a special challenge. What can we do about that?...";
fil["112"]= "modular-ixml.html@@@Modular ixml@@@Most current ixml grammars are small. However there are examples of large grammars, and it is likely that in the future more large grammars will emerge as ixml usage increases. To make large grammars more manageable, and to enable reuse, it would be useful to have a way to modularise them. One of the requirements of modularisation for reuse in any notation is to have a method of specifying the contractual interface, such that it is possible for the producers of the modules to change their internal structure without breaking any existing usage of the module. This paper describes a proposal for an ixml preprocessor that permits an ixml grammar to invoke other modules of ixml grammars, specifying their linkage. This involves the renaming of rules with name clashes in the modules, using ixml renaming, resulting in a single ixml grammar with no rule-name clashes, and so that the resultant XML serialisations remain the same. The invoking grammar remains unchanged. There is no change to the syntax or semantics of ixml proper...";
fil["113"]= "other-possible-approaches.html@@@Other Possible Approaches@@@...";
fil["114"]= "oxygen-main.html@@@Markup UK 2025 Proceedings@@@...";
fil["115"]= "past-papers-on-ixml.html@@@Chronological List of Past Papers on Invisible XML@@@...";
fil["116"]= "references.html@@@Bibliography@@@...";
fil["117"]= "revelations.html@@@What testing revealed@@@...";
fil["118"]= "schema-validation.html@@@Schema validation@@@...";
fil["119"]= "testing-ixml.html@@@Testing an iXML grammar@@@...";
fil["120"]= "what-is-xml.html@@@What is iXML?@@@...";
fil["121"]= "why-ixml.html@@@Why iXML?@@@...";
fil["122"]= "xspec-for-ixml.html@@@Using XSpec to test iXML@@@...";
fil["123"]= "xspec-for-xslt.html@@@Using XSpec to test XSLT@@@...";
fil["124"]= "xspec.html@@@XSpec@@@...";
var doStem = false;searchLoaded = true;