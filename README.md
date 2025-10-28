# Ar Ty Nevez - Gîte de charme à Lespiguet

Site web du gîte Ar Ty Nevez situé à Lespiguet sur la Pointe de Crozon, Finistère.

## Contexte

Ar Ty Nevez ("La Maison Neuve" en breton) est un gîte de charme situé à Lespiguet sur la magnifique Pointe de Crozon. Ce site présente notre location de vacances avec :

- Présentation du gîte et de ses équipements
- Galerie photo interactive
- Formulaire de contact et réservation
- Calendrier tarifaire

## Développement

### Prérequis
- Node.js 24+
- npm

### Installation
```bash
npm install
```

### Développement local
```bash
npm run dev
```

### Build de production
```bash
npm run build
```

## Déploiement sur OVH

Le site étant déployé sur un serveur OVH à l'adresse https://location-artynevez.fr, il faut penser à le mettre à jour à chaque modification.

Pour cela 2 méthodes : 

### Méthode manuelle

1. Build de production

```bash
npm run build
```

2. Transférer les fichiers par FTP avec un service comme `FileZilla`
   
   Remplacer tous les fichiers dans le répertoir `www/` (coté serveur) par tout ce que contient le répertoir de build `dist/` (en local)

### Méthode automatique (recommandée)
Le déploiement se fait automatiquement via GitHub Actions à chaque push sur la branche `release`.

Cela est rendu possible par le fichier `.github/workflows/ftp-deploy.yml`