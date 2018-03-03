pipeline {
  agent {
    label 'node'
  }
  stages {
    stage('Build Docs') {
      steps {
        sh 'git submodule update --init --recursive'
        sh 'npm run-script build-doc'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run-script build'
        sh 'npm run-script publish'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run-script deploy-test'
        sh 'npm run-script test'
        sh 'npm run-script teardown-test'
      }
    }
    stage('Production') {
      steps {
        sh 'npm run-script deploy-prod'
      }
    }
  }
}
