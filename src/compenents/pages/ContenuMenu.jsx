import React from 'react'

function ContenuMenu() {
    return (
        <div>
            <div className="" style={{ borderBottom: "solid 1px #dfe2e7", }}>
                <div className="p-5" id="simple-list-item-01">
                    <h4 className="fw-bold">
                        Documentation de l'API pour les Données Géographiques du
                        Sénégal
                    </h4>
                    <p className="">
                        Bienvenue dans la documentation de l'API pour les données géographiques du Sénégal. Cette API fournit des fonctionnalités permettant de récupérer des informations sur les régions, départements, arrondissements, communes, villages, lycées, hôpitaux et localisations du Sénégal.
                    </p>

                    <p>Version actuelle : 1.0</p>
                </div>
            </div>

            {/* Informations Importantes */}
            <div className="" style={{ borderBottom: "solid 1px #dfe2e7", }}>
                <div className="p-5" id="simple-list-item-02">
                    <h4 className='fw-bold'>Informations Importantes</h4>
                    <p>L'architecture de Galsen API par catégories suit désormais la structure ci-dessous :</p>
                    <ul>
                        <li>nom</li>
                        <li>code</li>
                        <li>superficie_km2</li>
                        <li>population_masculine</li>
                        <li>population_feminine</li>
                        <li>population</li>
                        <li>taux_scolarisation_globale</li>
                        <li>incidence_pauvrete</li>
                        <li>taux_alphabetisation_general</li>
                        <li>taux_enregistrement_etat_civil</li>
                        <li>densite</li>
                    </ul>
                    <p>Nous avons ajouté une nouvelle colonne type à la table communes. Cette colonne utilise le type (enum) pour spécifier le type de commune.</p>
                    <p>Les valeurs possibles sont les suivantes :</p>
                    <ul>
                        <li>Commune : Les anciennes communautés rurales sont érigées en communes.</li>
                        <li>commune_d_arrondissement : A l'intérieur des villes de Dakar, de Thiès, de Pikine, de Rufisque et de Guediawaye on a des communes d’arrondissements.</li>
                        <li>Code Arrondissement : Nous avons également ajouté une colonne code_arr pour stocker le code de l'arrondissement auquel la commune appartient. Cela permet une meilleure organisation et une référence plus précise des données.</li>
                    </ul>
                    <p></p>

                    <p>Veuillez prendre en compte ces changements lors de l'utilisation de l'API.</p>
                </div>
            </div>


            {/* CONTRIBUTIONS */}
            <div className="" style={{ borderBottom: "solid 1px #dfe2e7", }}>
                <div className="p-5" id="simple-list-item-05">
                    <h4 className='fw-bold'>CONTRIBUTIONS</h4>
                    <ul>
                        <li>Si vous trouvez des erreurs ou des lacunes dans notre documentation API, n'hésitez pas à soumettre des corrections ou des ajouts via des pull requests sur notre dépôt GitHub. Nous apprécions vos efforts pour maintenir notre documentation à jour et précise.</li>
                        <br />
                        <li>Nous sommes reconnaissants envers les contributeurs qui aident à rendre notre API accessible à un public plus large en proposant des traductions de la documentation dans d'autres langues. Si vous souhaitez contribuer à la traduction, veuillez nous contacter pour obtenir des instructions.</li>
                        <br />
                        <li>Si vous rencontrez des problèmes lors de l'utilisation de notre API ou si vous avez des suggestions d'amélioration, veuillez ouvrir une issue sur notre page GitHub pour que notre équipe puisse y répondre.</li>
                        <br />
                        <li>Nous encourageons activement les contributions de la part de la communauté des développeurs. Si vous avez des idées d'amélioration ou si vous avez repéré un bug, n'hésitez pas à soumettre une pull request sur notre dépôt GitHub.</li>
                    </ul>
                </div>
            </div>


            {/* Domaines de l'API */}
            <div className="" style={{ borderBottom: "solid 1px #dfe2e7", }}>
                <div className="p-5" id="simple-list-item-03">
                    <h4 className='fw-bold'>Domaines de l'API</h4>
                    <h6>Voici les principaux domaines couverts par l'API :</h6>
                    <ul>
                        <li>Géographie Administrative : (Régions, Départements, Arrondissements, Villages, communes, Lycées, Ecoles, Hopitaux)</li>
                        <li>Données Démographiques : (Population, Taux de scolarisation, Taux d'alphabétisation, Taux d'enregistrement à l'état civil)</li>
                        <li>Indicateurs Socio-Économiques : (Incidence de la pauvreté, Superficie en kilomètres carrés)</li>
                    </ul>
                    <p className="fw-bold">Ces domaines vous offrent un large éventail de fonctionnalités pour explorer et analyser les données géographiques et socio-économiques du Sénégal.</p>
                </div>
            </div>


            {/* Points d'accès de l'API */}
            <div className="" style={{ borderBottom: "solid 1px #dfe2e7", }}>
                <div className="p-5" id="simple-list-item-04">
                    <h4 className='fw-bold'>Points d'accès de l'API</h4>
                    <p>Les points d'accès de Galsen API sont des URL spécifiques auxquelles vous pouvez envoyer des requêtes pour interagir avec l'API et accéder à différentes fonctionnalités ou données. Chaque point d'accès correspond à une action ou à une ressource spécifique de l'API.</p>
                </div>
                <div className="p-1 mx-5" id="simple-list-item-05">
                    <h4 className='fw-bold'>Utilisation des Points d'Accès</h4>
                    <p>Pour utiliser un point d'accès de Galsen API, vous devez envoyer une requête HTTP à l'URL appropriée en spécifiant la méthode HTTP appropriée (GET, POST, etc.) et éventuellement des paramètres supplémentaires dans le corps de la requête ou dans l'URL.</p>
                </div>
            </div>
        </div>
    )
}

export default ContenuMenu