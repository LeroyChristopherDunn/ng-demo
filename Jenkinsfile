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
        sh "npm run ci_test"
        junit 'build/test-reports/**/*.xml'
    }

    stage('integration tests') {
        sh "npm run ci_integrationTest"
        junit 'build/test-reports/**/*.xml'
    }

    stage('deploy to Dev environment') {
        sh "echo 'deployed to dev envrionment'"
    }    
}

node {
  input 'Deploy to staging environmet?'
  stage('deploy to Staging environment') {
    sh "echo 'deployed to staging envrionment'"
  }
}

node {
  input 'Deploy to prod environmet?'
  stage('deploy to Prod environment') {
      sh "echo 'deployed to prod envrionment'"
  }
}

