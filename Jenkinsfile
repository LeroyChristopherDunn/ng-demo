node {
  
    def nodeHome = tool name: 'node', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    env.PATH = "${nodeHome}/bin:${env.PATH}"
  
    stage('check environment') {
        sh "node -v"
        sh "npm -v"
    }

    stage('checkout') {
        checkout scm
    }

    stage('build') {
        sh "npm install"
        sh "npm run build"
    }

    stage('unit test') {

        try {
            sh "npm run ci_test"
            junit 'test-results.xml'
        } catch(err) {
            junit 'test-results.xml'
            throw err
        }
        
    }

    stage('integration test') {

        try {
            sh "npm run ci_integrationTest"
            junit 'test-results.xml'
        } catch(err) {
            junit 'test-results.xml'
            throw err
        }

    }

    stage('Dev deploy') {
        sh "echo 'deployed to dev envrionment'"
    }    
  
    stage('Staging deploy') {
      sh "echo 'deployed to staging environment'"
    }
  
    stage('Prod deploy') {
      input 'Deploy to prod environment?'
      sh "echo 'deployed to prod environment'"
  }

}

