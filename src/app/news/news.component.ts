import { Component } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  constructor() { }

  ngOnInit() {
  }

  articles: Article[] = [
    new Article("Raiola offered Manchester City Pogba in January – Guardiola", "Despite their fractious relationship, Pep Guardiola revealed Mino Raiola offered him Manchester United star Paul Pogba in January. Pep Guardiola claims agent Mino Raiola offered Manchester City Paul Pogba and Henrikh Mkhitaryan in January, despite branding the Catalan coach 'a dog' and 'a coward' in a recent interview. Raiola and Guardiola have a long-standing feud which is said to go back as far as 2010, when the Dutchman's client Zlatan Ibrahimovic was reportedly forced out of Barcelona due to disputes with the Catalan. In an interview at the end of March, Raiola also claimed then-AC Milan chief Adriano Galliani stopped him from attacking Guardiola after he led Barca to glory in the 2011 Champions League final.", "OneFooball", "04/06/2018, 9:34AM", "./src/assets/pogma-image-01.jpg"),
    new Article("Guardiola not changing derby plans after Anfield woe", "Pep Guardiola insists he has not changed his selection plans for Saturday's Manchester derby in the wake of City's 3-0 defeat at Liverpool in midweek. City will seal the Premier League with six games to spare if they beat their bitter rivals at the Etihad Stadium, but being outplayed in the first leg of their Champions League quarter-final on Wednesday did not represent ideal preparation. Ahead of that encounter at Anfield, Guardiola said the tie against Liverpool would take priority over the derby in his planning, despite the dream scenario of winning the title against United holding obvious appeal in the eyes of many City fans.", "OneFooball", "04/06/2018, 6:52AM", "./src/assets/pep-guardiola-image-02.jpg"),
    new Article("Paul Ince predicts an 'exodus' from Manchester United this summer", "Former Manchester United midfielder Paul Ince has launched a scathing attack against José Mourinho, calling into question the Portuguese tactician’s style of play. The ex-England international believes that there will be an 'exodus' of players leaving Old Trafford this summer, with the manager’s stultifying, defensive football putting off the game’s greatest names. Cash aside, it’s also about attracting the right players,” Ince said speaking to Paddy Power.", "OneFooball", "04/06/2018, 4:58AM", "./src/assets/paul-ince-attack-03.jpg"),
    new Article("Pochettino boosted by Kane progress", "Struggling Stoke City could face the ominous prospect of Harry Kane returning to Tottenham's starting line-up on Saturday. Harry Kane is closing in on a starting berth for Tottenham's Premier League trip to Stoke City. The England striker was expected to spend a significant period on the sidelines when he suffered an ankle injury at Bournemouth four weeks ago. But Kane returned to action as a second-half substitute during last Sunday's 3-1 win at Chelsea and is shaping up well ahead of Saturday's fixture versus opponents he has scored eight times against in his previous four outings.", "OneFooball", "04/06/2018, 5:08AM", "./src/assets/harry-kane-return-04.jpg"),
    new Article("MLS Weekend Forecast: A huge showdown in Atlanta and Ibra to start?", "Two of the newest teams in MLS are set to face off for the very first time in a highly anticipated showdown in Atlanta. With eight matches on the cards, there’s plenty of football to enjoy after the conclusion of the European fixtures.", "OneFooball", "04/06/2018, 4:33AM", "./src/assets/lafc-player-05.jpg"),
  ]


}
