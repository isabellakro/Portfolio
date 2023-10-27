# Predicting Emigration from Latin America and the Caribbean due to Climate Change
## Project information
**Author**: Isabella Kroon, Computation and Design (Social Policy), Class of 2025, Duke Kunshan University

**Instructor**: Prof. Luyao Zhang, Duke Kunshan University

**Disclaimer**: Submitted to the Final Project for [STATS201 Introduction to Machine Learning for Social Science, 2022 Autumn Term (Seven Week - Second)](https://ms.pubpub.org/) instructed by Prof. Luyao Zhang at Duke Kunshan University.

**Acknowledgments**: My sincerest thanks to Professor Luyao Zhang for her teachings in Machine Learning for Social Science, to Yutong Sun for her valuable advise as peer reviewer, and to [Whimsical](https://whimsical.com), [Plotly](https://plotly.com/python/), [Canva](https://www.canva.com/), [Scikit-learn](https://scikit-learn.org/stable/index.html), and [BibTex](https://scholar.google.com/).

**Project Summary**: 
  - **Background & Motivation:** According to the World Bank, Latin America, Sub-Saharan Africa, and Southeast Asia will produce 143 million climate migrants by 2050 (Rigaud et al). However, climate change is currently not recognized as a reason to grant refugee status. It is important to understand the effects of climate change on migration to advocate for the millions of people who will be displaced in the coming years.
  - **Research Question:** How does change in yearly temperature (x) influence emigration from Latin America and the Caribbean (y)?
  - **Application Scenario (Data Source):** The data will be sourced from [OurWorldInData.org](https://ourworldindata.org/migration) to project emigration from Latin America and the Caribbean. 
  
The following figure helps us to better understand the impact of climate shocks in this area:
 
 ![Figure 1](spotlight/figures/mapLA.webp)
 
  This figure shows the number of people affected by tropical storms, hurricanes, and floods from 1970-2011 (Kaenzig et al).

  - **Methodology:** We will use an agent-based model from a study of migration in Thailand that incorporates the various factors that influence migration, such as population growth and economic instability, as well as demographic and land use data (Entwisle et al). Then we will subject this model to various long-term weather conditions and climate shocks, and model the subsequent changes in migration. By keeping all other factors constant, we can control for other influential variables and find the effect of climate change.
  
Jargon: Agent-based models are simulations used to study interactions between people, places, things, and time. Agents are assigned specific qualities to interact with other agents in specific ways. ABMs are good for understanding complex relationships involving multiple influences. ABMs are best for cases when interrelatedness, reciprocity, and feedback loops are believed to exist (“Agent-Based Modeling | Columbia Public Health,” n.d.).
 
  - **Results:** We expect our results to find a relationship between climate change and emigration. We expect this relationship to be positive, meaning we expect that climate change increases the rate of emigration from Latin American and Caribbean countries
  - **Intellectual Merits and Practical Impacts:** We identify three areas for contribution. First, Rigaud et al (2018) used machine learning to model climate migration. However, this study focused on Central America and used Mexico as a case study. We plan to focus on Latin America and the Caribbean in its entirety for a more comprehensive understanding of climate change. Second, Entwisle et al (2016) used the agent-based model that incorporated demographic and land use data. This study modeled climate migration in Thailand, so we will verify the model's efficacy by applying it to a new case study. Furthermore, we will apply new, relevant agents to Latin America's situation. Finally, Kaenzig et al (2014) discussed the current understanding of climate change in Latin America. The paper found that this area is "highly at risk yet very little studied." This finding further makes the case for our study to close gaps in existing knowledge.



## Table of Contents
- [Data](https://github.com/Rising-Stars-by-Sunshine/Final-Project-Isabella#data)
- [Code](https://github.com/Rising-Stars-by-Sunshine/Final-Project-Isabella#code)
- [Spotlight](https://github.com/Rising-Stars-by-Sunshine/Final-Project-Isabella#spotlight)
- [More about the Author](https://github.com/Rising-Stars-by-Sunshine/Final-Project-Isabella#more-about-the-author)
- [References](https://github.com/Rising-Stars-by-Sunshine/Final-Project-Isabella#literature)



## Data

|Data Source:| [Our World In Data](https://ourworldindata.org/migration)|
|------|------|
|Queried Data|[Link](data/Queried_Data/Queried_data.csv)|
|Processed Data|[Link](https://github.com/Rising-Stars-by-Sunshine/Final-Project-Isabella/tree/main/data/Processed_Data)|


## Code

|Code|Link|
|---|---|
|Query Data|[Link](code/Explanation/Explanation_Query_Data.ipynb)|
|Process Data|[Link](code/Prediction/Prediction_Process_Data_Prepare_X_and_Y_for_Classification_and_Regressions.ipynb)|
|Analyze Data for Explanation|[Link](code/Explanation/Explanation_Analyze_Data.ipynb)|
|Analyze Data for Prediction|[Link](code/Prediction/Prediction_Analyze_Data_Machine_Learning.ipynb)|

## Spotlight
![Figure 1 - Research Poster](spotlight/figures/Predicting_Emigration.png)
**Figure No. 1** Research Poster (created by [Canva](https://www.canva.com/design/DAFUBazg8TM/SSeNp4SkAErsq6SzPxraUg/view?utm_content=DAFUBazg8TM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink))

Figure No.1 shows the six aspects of the research summary: Background & Motivation, Research Question, Application Scenario, Methodology, Results, and Intellectual Merits and Practical Impacts.

![Figure 2 - Explanation Product](spotlight/figures/newplot.png)
**Figure No. 2** Explanation Product (created by [Plotly](https://plotly.com/python/) using data from [Our World In Data](https://ourworldindata.org/migration))

Figure 2 represents the time-series data of the number of emigrantsfrom Latin America and the Caribbean. The x-axis shows the years from 1990 to 2020, and the y-axis shows the number of emigrants in millions of people. We can see a generally positive and linear relationship between time and emigration.

![Figure 3 - Prediction Product](spotlight/figures/linear_regression.jpg)
**Figure No. 3** Prediction Product (created by [Scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html))

Figure 3 represents the regression histogram for a linear regression model for the simple moving average of emigration. The blue bars represent the actual values from the dataset, and the green bars represent the predicted values. This histogram helps us to understand the accuracy of our model for the data set. We can see there is an issue with applying a linear regression model to this dataset.

## More about the Author
<img src="spotlight/figures/MyPhoto.jpg" width="400" />

Isabella Kroon is a sophomore student at Duke Kunshan University, majoring in Computation and Design with a track in Social Policy and an Environmental Sustainability concentration. She is interested in how statistics and computation can be used to understand environmental issues and better inform environmental policy.

**Final reflections**

Through this project I learned a lot about how we can apply machine learning to social issues. For example, it would never be possible to conduct an actual study about how climate change impacts emigration, because there are too many uncontrollable variables. Machine learning allows us to study important questions that could otherwise not be studied. However, I also learned about its limitations. There is not enough data available to understand my specific research question. In this case, machine learning cannot help us to better understand such a small amount of available data. As we discussed in class, lack of data is a common problem when studying social issues.


### References

“Agent-Based Modeling" n.d. Www.publichealth.columbia.edu. Columbia Public Health. [https://www.publichealth.columbia.edu/research/population-health-methods/agent-based-modeling](https://www.publichealth.columbia.edu/research/population-health-methods/agent-based-modeling).

Entwisle, Barbara, Nathalie E. Williams, Ashton M. Verdery, Ronald R. Rindfuss, Stephen J. Walsh, George P. Malanson, Peter J. Mucha, et al. 2016. “Climate Shocks and Migration: An Agent-Based Modeling Approach.” Population and Environment 38 (1): 47–71. [https://doi.org/10.1007/s11111-016-0254-y](https://doi.org/10.1007/s11111-016-0254-y).

Hsiang, Solomon M., and Adam H. Sobel. 2016. “Potentially Extreme Population Displacement and Concentration in the Tropics under Non-Extreme Warming.” Scientific Reports 6 (1): 25697. [https://doi.org/10.1038/srep25697](https://doi.org/10.1038/srep25697).

Kaenzig, Raoul, and Etienne Piguet. 2013. “Migration and Climate Change in Latin America and the Caribbean.” People on the Move in a Changing Climate 2 (August): 155–76. [https://doi.org/10.1007/978-94-007-6985-4_7](https://doi.org/10.1007/978-94-007-6985-4_7).

Ortiz-Ospina, Esteban, Max Roser, Hannah Ritchie, Fiona Spooner, and Marcel Gerber. 2022. “Migration.” Our World in Data, November. [https://ourworldindata.org/migration](https://ourworldindata.org/migration).

Rigaud, Kanta Kumari, Alex de Sherbinin, Bryan Jones, Jonas Bergmann, Viviane Clement, Kayly Ober, Jacob Schewe, et al. 2018. “Groundswell: Preparing for Internal Climate Migration.” WorldBank.org. Washington, DC: World Bank. [https://doi.org/http://hdl.handle.net/10986/29461](https://doi.org/http://hdl.handle.net/10986/29461).
