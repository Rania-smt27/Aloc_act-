Réponse:
1) afficher le 10 premier enregitrement http://localhost:3004/Jobs?$top=10 -> pagination

2) afficher les titre qui commnacant par M: GET /Jobs?filter=startswith(title,%27M%27) avec das commandes HTTP

3) la signification de Cache-Control : No-Cache — La directive no-cache signifie qu'un navigateur peut mettre en cache une réponse, mais doit d'abord soumettre une demande de validation à un serveur original.