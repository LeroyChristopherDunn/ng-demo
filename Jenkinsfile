node {
  
    def nodeHome = tool name: 'node', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    env.PATH = "${nodeHome}/bin:${env.PATH}"
  
    stage('check tools') {
        sh "node -v"
        sh "npm -v"
    }

    stage('checkout') {
        checkout scm
    }

    stage('npm install') {
        sh "npm install"
    }

    stage('unit tests') {

        try {
            sh "npm run ci_test"
            junit 'test-results.xml'
        } catch(err) {
            junit 'test-results.xml'
            throw err
        }
        
    }

    stage('integration tests') {

        try {
            sh "npm run ci_integrationTest"
            junit 'test-results.xml'
        } catch(err) {
            junit 'test-results.xml'
            throw err
        }

    }

    stage('deploy to Dev environment') {
        sh "echo 'deployed to dev envrionment'"
    }    
  
    stage('deploy to Staging environment') {
      input 'Deploy to staging environmet?'
      sh "echo 'deployed to staging envrionment'"
    }
  
    stage('deploy to Prod environment') {
      input 'Deploy to prod environmet?'
      sh "echo 'deployed to prod envrionment'"
  }
}

