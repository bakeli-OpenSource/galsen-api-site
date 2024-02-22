import React from 'react'

function ContenuMenu() {
    return (
        <div>
            <div className="" style={{ borderBottom: "solid 1px #dfe2e7", }}>
                <div className="p-5" id="simple-list-item-01">
                    <h4 className="">
                        Documentation de l'API pour les Données Géographiques du
                        Sénégal
                    </h4>
                    <p className="">
                        Bienvenue dans la documentation de l'API pour les données
                        géographiques du Sénégal. Cette API fournit des
                        fonctionnalités permettant de récupérer des informations sur
                        les régions, départements, arrondissements et villages du Sénégal.
                    </p>
                </div>
            </div>

            {/* Informations Importantes */}
            <div className="" style={{ borderBottom: "solid 1px #dfe2e7", }}>
                <div className="p-5" id="simple-list-item-02">
                    <h4>Informations Importantes</h4>
                    <p>L'architecture de Galsen API par catégories suit désormais la structure ci-dessous :</p>
                    <p>
                        - name <br />
                        - code_vill <br />
                        - superficie_km2 <br />
                        - population_masculine <br />
                        - population_feminine <br />
                        - population <br />
                        - taux_scolarisation_globale <br />
                        - incidence_pauvrete <br />
                        - taux_alphabetisation_general <br />
                        - taux_enregistrement_etat_civil <br />
                    </p>
                    <p>Veuillez prendre en compte ces changements lors de l'utilisation de l'API.</p>
                </div>
            </div>

            {/* CONTRIBUTIONS */}
            <div className="" style={{ borderBottom: "solid 1px #dfe2e7", }}>
                <div className="p-5" id="simple-list-item-05">
                    <h4>CONTRIBUTIONS</h4>
                    <p>
                        - Si vous trouvez des erreurs ou des lacunes dans notre documentation API, n'hésitez pas à soumettre des corrections ou des ajouts via des pull requests sur notre dépôt GitHub. Nous apprécions vos efforts pour maintenir notre documentation à jour et précise. <br /> <br />

                        - Nous sommes reconnaissants envers les contributeurs qui aident à rendre notre API accessible à un public plus large en proposant des traductions de la documentation dans d'autres langues. Si vous souhaitez contribuer à la traduction, veuillez nous contacter pour obtenir des instructions. <br /><br />

                        -Si vous rencontrez des problèmes lors de l'utilisation de notre API ou si vous avez des suggestions d'amélioration, veuillez ouvrir une issue sur notre page GitHub pour que notre équipe puisse y répondre. <br /><br />

                        -Nous encourageons activement les contributions de la part de la communauté des développeurs. Si vous avez des idées d'amélioration ou si vous avez repéré un bug, n'hésitez pas à soumettre une pull request sur notre dépôt GitHub.
                    </p>
                </div>
            </div>

            {/* Domaines de l'API */}
            <div className="" style={{ borderBottom: "solid 1px #dfe2e7", }}>
                <div className="p-5" id="simple-list-item-03">
                    <h4>Domaines de l'API</h4>
                    <h6>Voici les principaux domaines couverts par l'API :</h6>
                    <p>- Géographie Administrative : (Régions, Départements, Arrondissements, Villages) </p>
                    <p>- Données Démographiques :(Population, Taux de scolarisation, Taux d'alphabétisation, Taux d'enregistrement à l'état civil) </p>
                    <p>- Indicateurs Socio-Économiques :(Incidence de la pauvreté, Superficie en kilomètres carrés) </p>
                    <p className="fw-bold">Ces domaines vous offrent un large éventail de fonctionnalités pour explorer et analyser les données géographiques et socio-économiques du Sénégal.</p>
                </div>
            </div>

            {/* Points d'accès de l'API */}
            <div className="" style={{ borderBottom: "solid 1px #dfe2e7", }}>
                <div className="p-5" id="simple-list-item-04">
                    <h4>Points d'accès de l'API</h4>
                    <p>Les points d'accès de Galsen API sont des URL spécifiques auxquelles vous pouvez envoyer des requêtes pour interagir avec l'API et accéder à différentes fonctionnalités ou données. Chaque point d'accès correspond à une action ou à une ressource spécifique de l'API.</p>
                </div>
                <div className="p-1 mx-5" id="simple-list-item-05">
                    <h4>Utilisation des Points d'Accès</h4>
                    <p>Pour utiliser un point d'accès de Galsen API, vous devez envoyer une requête HTTP à l'URL appropriée en spécifiant la méthode HTTP appropriée (GET, POST, etc.) et éventuellement des paramètres supplémentaires dans le corps de la requête ou dans l'URL.</p>
                </div>
            </div>
        </div>
    )
}

export default ContenuMenu