pipeline {
  agent {
    node {
      label 'JFile'
    }

  }
  stages {
    stage('Ejecutar Tests') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Msg Final') {
      steps {
        echo 'Se terminó el test'
      }
    }

  }
}