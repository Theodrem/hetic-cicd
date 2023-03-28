

# Projet Devops

## Système de branche

**Les branches fixes:**
- Main
- Dev

La branche main est la branche principale. La branche dev démarre de cette branche.

On part de la branche `dev`, pour créer une nouvelle branche que sera une nouvelle fonctionnalités ou fix de bug.


**Pour merger la  pull request sur main, un autre développeur doit valider la branch**


## Ci/CD avec Jenkins

**Pour lancer le serveur Jenkins sur le port `5050`**:
```shell
docker-compuse up 
```


## Lancer le projet

**Installer les dépendances:**
```shell
npm install
```

**Executer le projet:**
```shell
npm start
```
