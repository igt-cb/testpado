// This script file has been created automatically per your request.
//
// The following pages can help you get started with JavaScript:
// * JavaScript Tutorial (http://w3schools.com/js/default.asp)
// * JavaScript and HTML DOM Reference (http://w3schools.com/jsref/default.asp) 
// * JavaScript Examples (http://w3schools.com/js/js_examples.asp)

// * Quality Docs Rename & Developer Center and CRT Redirections

const newURLFromOldUrl =  new Map([
  ['/dynamic-expressions-new','/dynamic-expressions-v18-23-1-or-later'],
  ['/pmd-quality-tool-extension-configuration','/pmd-quality-tool-setup'],
  ['/quality-tools-extension','/introduction-to-copado-robotic-testing-pmd-tests'],
  ['/copado-robotic-testing-quality-tool-extension-configuration','/copado-robotic-testing-quality-tool-setup'],
  ['/test-object-creation','/test-object'],
  ['/#!copado-robotic-testing-publication/jira','/#!copado-robotic-testing-publication/copado-robotic-testing-jira-integration'],
  ['/#!copado-robotic-testing-publication/jira-integration','/#!copado-robotic-testing-publication/copado-robotic-testing-for-sap-jira-integration'],
  ['/#!copado-ci-cd-publication/example-function-scripts','#!copado-developer-center-publication/example-function-scripts'],
  ['/#!copado-ci-cd-publication/executing-a-function','/#!copado-developer-center-publication/execute-a-function'],
  ['/#!copado-ci-cd-publication/executing-a-function-from-the-function-record','/#!copado-developer-center-publication/execute-a-function-from-the-function-record'],
  ['/#!copado-ci-cd-publication/executing-a-function-from-a-salesforce-flow','/#!copado-developer-center-publication/execute-a-function-from-a-salesforce-flow'],
  ['/#!copado-ci-cd-publication/executing-a-function-as-part-of-a-deployment','/#!copado-developer-center-publication/execute-a-function-as-part-of-a-deployment'],
  ['/#!copado-ci-cd-publication/executing-a-function-from-apex','/#!copado-developer-center-publication/execute-a-function-from-apex'],
  ['/#!copado-ci-cd-publication/dynamic-expressions','/#!copado-developer-center-publication/dynamic-expressions'],
  ['/#!copado-ci-cd-publication/example-function-commands','/#!copado-developer-center-publication/example-function-commands'],
  ['/#!copado-ci-cd-publication/dynamic-expressions-v18-23-1-or-later','/#!copado-developer-center-publication/dynamic-expressions-v18-23-1-or-later'],
  ['/#!copado-ci-cd-publication/copado-function-programming-languages','/#!copado-developer-center-publication/copado-function-programming-languages'],
  ['/#!copado-ci-cd-publication/function-callback','/#!copado-developer-center-publication/function-callback'],
  ['/#!copado-ci-cd-publication/executing-a-job-template-from-apex','/#!copado-developer-center-publication/execute-a-job-template-from-apex'],
  ['/#!copado-ci-cd-publication/shared-volume-setup','/#!copado-developer-center-publication/shared-volume-setup'],
  ['/#!copado-ci-cd-publication/build-a-custom-job-step','/#!copado-developer-center-publication/build-a-custom-job-step'],
  ['/#!copado-ci-cd-publication/copado-actions-api','/#!copado-developer-center-publication/copado-actions-api'],
  ['/#!copado-ci-cd-publication/create-a-dev-ops-extension','/#!copado-developer-center-publication/create-a-dev-ops-extension'],
  ['/#!copado-ci-cd-publication/generic-devops-plugin','/#!copado-developer-center-publication/generic-devops-plugin'],
  ['/#!copado-ci-cd-publication/burn-down-charts','/#!copado-ci-cd-publication/sprint-burn-up-and-burn-down-charts'],
  ['/#!copado-ci-cd-publication/create-custom-devops-pipeline','/#!copado-developer-center-publication/create-custom-devops-pipeline'],
  ['/#!copado-ci-cd-publication/build-the-commit-page-for-the-commit-action-in-copado-devops-platform','/#!copado-developer-center-publication/build-the-commit-page-for-the-commit-action-in-copado-devops-platform'],
  ['/#!copado-ci-cd-publication/generic-devops-plugin-setup-description-of-optional-system-properties','/#!copado-developer-center-publication/generic-devops-plugin-setup-description-of-optional-system-properties'],
  ['/#!copado-developer-center-publication/create-a-custom-devops-pipeline','/#!copado-developer-center-publication/create-an-advanced-custom-cicd-pipeline'],
  
]);
 
  
  // * DevOps Exchange Listing Docs Redirections
  
const devopsRedirects = new Set([
  '/#!copado-ci-cd-publication/own-backup-integration',
  '/#!copado-ci-cd-publication/how-to-retrieve-copado-compliance-hub-sample-rules-from-the-unlocked-package',
  '/#!copado-ci-cd-publication/clayton-integration',
  '/#!copado-ci-cd-publication/digit-sec-integration',
  '/#!copado-ci-cd-publication/pre-built-data-templates',
  '/#!copado-ci-cd-publication/copado-advanced-data-deploy-for-cpq'
]);

function redirectIfNeeded(){
   if (window.location.pathname.toLowerCase() == '/articles/' && window.location.hash) {
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/faq2') > -1) {
            window.location.href = "https://docs.copado.com/articles/#!copado-ci-cd-publication/quality-testing-faqs";
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/faq3') > -1) {
            window.location.href = "https://docs.copado.com/articles/#!copado-ci-cd-publication/copado-version-control-faqs";
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/faq1') > -1) {
            window.location.href = "https://docs.copado.com/articles/#!copado-ci-cd-publication/salesforce-source-format-pipelines-faqs";
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/copado-webhooks') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/copado-actions-api");
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/tests-in-devops-platform1') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/tests-in-devops-platform");
        }
          
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/salesforce-source-format-pipelines");
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/copado-ci-cd-for-salesforce-2nd-generation-overview') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/salesforce-source-format-pipelines-overview");
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/workflow-with-copado-ci-cd-for-salesforce-2nd-generation-commit-promote-deploy') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/workflow-with-salesforce-source-format-pipelines-commit-promote-deploy");
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/what-has-changed-between-copado-ci-cd-for-salesforce-classic-and-copado-ci-cd-for-salesforce-2nd-gen') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/what-has-changed-between-salesforce-metadata-pipelines-and-salesforce-source-format-pipelines");
        }
         if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/supported-functionalities-and-limitations-in-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/supported-functionalities-and-limitations-in-salesforce-source-format-pipelines");
        }
         if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/supported-metadata-in-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/supported-metadata-in-salesforce-source-format-pipelines");
        }
          if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/copado-ci-cd-for-salesforce-2nd-generation-configuration-steps') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/salesforce-source-format-pipelines-configuration-steps");
        }
         if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/git-initialisation-for-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/git-initialisation-for-salesforce-source-format-pipelines");
        }
         if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/initialize-a-repository-from-the-cli-for-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/initialize-a-repository-from-the-cli-for-salesforce-source-format-pipeline");
        }
         if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/configure-gitdepth-for-your-2nd-gen-pipeline') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/configure-gitdepth-for-your-salesforce-source-format-pipeline");
        }
          if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/destructive-change-commit-with-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/destructive-change-commit-with-salesforce-source-format-pipelines");
        }
          if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/validate-a-user-story-with-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/validate-a-user-story-with-salesforce-source-format-pipelines");
        }
          if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/commit-process-with-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/commit-process-with-salesforce-source-format-pipelines");
        }
         if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/custom-setting-deployment-with-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/custom-setting-deployment-with-salesforce-source-format-pipelines");
        }
         if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/add-custom-setting-records-for-deployment-with-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/add-custom-setting-records-for-deployment-with-salesforce-source-format-pipelines");
        }
         if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/apex-tests-with-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/execute-apex-tests-in-a-user-story-with-salesforce-source-format-pipelines");
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/pmd-quality-tool-configuration-and-setup-with-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/pmd-quality-tool-configuration-and-setup-with-salesforce-source-format-pipelines");
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/copado-robotic-testing-integration-setup-with-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/copado-robotic-testing-integration-setup-with-salesforce-source-format-pipelines");
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/promotion-overview-with-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/promotion-overview-with-salesforce-source-format-pipelines");
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/create-and-execute-a-promotion-with-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/create-and-execute-a-promotion-with-source-format-pipelines");
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/customize-the-promotion-merge-order-in-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/customize-the-promotion-merge-order-in-salesforce-source-format-pipelines");
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/devops-platform-vs-copado-ci-cd-for-salesforce-classic-testing') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/devops-platform-vs-copado-ci-cd-for-salesforce-metadata-pipelines-testing");
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/environment-variables-in-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/environment-variables-in-salesforce-source-format-pipelines");
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/copado-data-deploy-for-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/copado-data-deploy-for-salesforce-source-format-pipelines");
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/full-profile-deployment-with-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/full-profile-deployment-with-salesforce-source-format-pipelines");
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/destructive-change-deployment-with-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/destructive-change-deployment-with-salesforce-source-format-pipelines");
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/execute-a-quick-deployment-with-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/execute-a-quick-deployment-with-salesforce-source-format-pipelines");
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/validation-deployment-with-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/validation-deployment-with-salesforce-source-format-pipelines");
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/deployment-overview-with-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/deployment-overview-with-salesforce-source-format-pipelines");
        }
        if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/conflict-resolution-with-copado-ci-cd-for-salesforce-2nd-generation') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/conflict-resolution-with-salesforce-source-format-pipelines");
        }
     if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/user-story-bundles-in-copado-devops-platform') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/user-story-bundles-in-salesforce-source-format-pipelines");
        }
      if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/create-a-user-story-bundle-in-copado-devops-platform') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/create-a-user-story-bundle-in-salesforce-source-format-pipelines");
        }
      if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/cancel-a-user-story-bundle-in-copado-devops-platform') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/cancel-a-user-story-bundle-in-salesforce-source-format-pipelines");
        }
     if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/copado-ci-cd-for-salesforce-2nd-generation-backend-upgrades') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/salesforce-source-format-pipelines-backend-upgrades");
        }
         if (window.location.hash.toLowerCase().indexOf('#!copado-ci-cd-publication/rollback-2') > -1) {
            // Redirect from the old topic to the new one
            window.location.replace("#!copado-ci-cd-publication/rollback-1");
        }
    }
}

window.addEventListener("hashchange", redirectIfNeeded, false);
redirectIfNeeded();

function redirectOldId(){
  for(let uri of newURLFromOldUrl.entries()){
    if(window.location.toString().indexOf(uri[0]) > -1){
      window.location.href = window.location.toString().replace(uri[0],uri[1]);
      return;
    }
  }
}
function redirectToDevopsExchange(){
  for(let uri of devopsRedirects.values()){
    if(window.location.toString().indexOf(uri) > -1){
      window.location.href = "https://success.copado.com/s/exchange-search";
      return;
    }
  }
}
redirectOldId();
redirectToDevopsExchange();