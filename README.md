
# Javascript powered Web scripts for Alfresco

Sample code for the [Alfresco Web Scripts using Javascript](http://www.devswede.com/2015/03/alfresco-web-scripts-using-javascript-part-1/) article series.

## Running the sample code

<code>git clone https://github.com/devswede/alfresco-js-sample.git</code>

<code>git checkout master</code>

Check Javascript styles with <code>gjslint -r . $(< closure-lint.cfg)</code>.

## Installing the sample module into Alfresco (Optional)

Build amp with <code>mvn install</code>.

Copy target/devswedejs.amp to Alfresco's amp directory.

Stop Tomcat

Inject amp-file into alfresco.war by running bin/apply_amps.sh

Start Tomcat

Locate the sample Api's by browsing the service index at http://localhost:8080/alfresco/service/index/family/DevSwede%20Samples

## Requirements

Java 1.7 JDK and Maven 3.2


