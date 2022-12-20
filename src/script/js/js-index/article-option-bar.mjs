import OptionBar from "../modules/option-bar.mjs";

window.addEventListener("load", () => {

    let optionbar = new OptionBar(
        document.querySelector("#article-option-bar"),
        "article-option",
        "article-option-bar-type",
        "article-option-bar-article",
        "article-option-bar-time"
    );

    (function () {
        optionbar.setStyle("transitionProperty", "background-color");
        optionbar.setStyle("transitionDuration", "0.3s");
        optionbar.setStyle("transitionTimingFunction", "ease-out");

        optionbar.hover(
            (event) => {
                event.stopPropagation();
                optionbar.setStyle("backgroundColor", "#163159")
                setTimeout(() => {
                    optionbar.setStyle("backgroundColor", "#223c62")
                }, 300)
            },
            (event) => {
                event.stopPropagation();

            })
    }())

    optionbar.showBox();

    for (let optionBox of optionbar.optionBarElement.querySelectorAll(".option-box")) {
        optionBox.setAttribute("style",
            `
            overflow: hidden;
            position: absolute;
            width: 150px;
            top: 30px;
            background-color: black;
            display: none;
            background-color: #223c62;
            top: 37px;
            transform: translate(-3%, 0);
            `)
    }


    optionbar.boxSet("article-option-bar-type", "文章", "程式碼", "歌詞")
    let articles = ["文章1", "文章2", "文章3"]; //~ test
    optionbar.boxSet("article-option-bar-article", "隨機", ...articles);
    optionbar.boxSet("article-option-bar-time", "1分鐘", "5分鐘", "10分鐘");

    for (let optionSetting of optionbar.optionBarElement.querySelectorAll(".option-box-setting")) {
        optionbar.hover(
            () => {
                optionSetting.style.backgroundColor = "#163159";
            },
            () => {
                optionSetting.style.backgroundColor = "#223c62";
            },
            optionSetting
        )
        optionbar.setStyle("transitionProperty", "background-color", optionSetting);
        optionbar.setStyle("transitionDuration", "0.3s", optionSetting);
        optionbar.setStyle("transitionTimingFunction", "ease-out", optionSetting);
    }

    let article = document.querySelector("#article-main-part");
    let typing = document.querySelector("#typing-main-part");

    const colorChange = (first, second) => {
        let oldArticleColor = article.style.color;
        let oldTypingColor = article.style.color;
        setTimeout(() => {
            article.style.color = "black";
            typing.style.color = "black";
            setTimeout(() => {
                article.style.color = oldArticleColor;
                typing.style.color = oldTypingColor;
            }, second)
        }, first)
    }

    //~ 選單個別設定: 文章
    (function () {
        document.querySelector("#article-option-bar-article-box-setting-文章1").addEventListener("click", () => {
            if (window.thisWeb.article != `    Spider silk is one of nature's wonder materials, more flexible than
nylon, thinner than a human hair, and, for its weight, stronger than
steel. Webs and nests are spun from this incredible natural protein
and spiders use thin threads to glide through the air and escape from
predators. Now science is looking to exploit silk's properties as a
way to deliver medicines and heal our bodies.
 American households are among the most energy-hungry on the planet,
consuming on average around 11,000 kilowatt-hours (kWh) of energy each
year. Electric water heaters alone use between 380-500 kWh per month.
So developing generation from natural tidal movement would appear to be
one of the best ways to meet demand and reduce greenhouse gas emissions.
 Desalination is one of the most widespread clean water technologies
on the planet and its use is essential for dry regions with poor-quality
fresh water supply. So a new low-cost solar-powered desalination
device could be the ideal solution to make water purify-cation more
widely affordable and environmentally friendly.
 No matter what, it's not much of a threat to us surface-bound folks.
We have our trusty atmosphere to protect us against any deadly cosmic
radiation. But orbiting satellites can run into issues without our
magnetic field in place to protect them: already the South Atlantic
Anomaly is a place best avoided, as the reduced magnetic protection
causes some glitches in the delicate hardware of our satellites.
 Vertical farming is a hugely promising agricultural technique that
aims to produce more food to meet the growing population on our finite
planet. Techniques include growing in vertical frames or even in
high-rise farms, saving on precious ground space, while moving farms
into urban areas, and producing nutritious crops without topsoil.
 When you zoom out to the big picture (and I mean 'big' here, as in
really big), all the problems and conflicts that have beset humanity
ever since there was a humanity are almost laughably parochial. From
the perspective of orbiting astronauts everything just dissolves.
National borders are revealed to be nothing more than imaginary lines
on a map. Majestic cities are reduced to smudges of grey. Great
monuments of heroes and deeds and barely discernible.
 Using a multi-layered vertical array of evaporators and condensers
allows each unit to operate like a solar still, creating pure distilled
water as vapor moves upwards through each layer. As vapor condenses
on a surface it releases heat. Each stage then reuses that heat in the
next evaporation process instead of wasting it.
 Climate change is cited for the introduction of West Nile virus to
the US. West Nile is spread by the mosquito species Culex and finds a
natural reservoir in birds. People become infected by mosquito bites
and that can cause damage to the brain and central nervous system, or
even death. Research shows that Culex population growth is linked to
higher temperatures, high humidity and drought. Approximately seven
million people were infected in the US between 1999 and 2016.`) {
                window.thisWeb.article = `    Spider silk is one of nature's wonder materials, more flexible than
nylon, thinner than a human hair, and, for its weight, stronger than
steel. Webs and nests are spun from this incredible natural protein
and spiders use thin threads to glide through the air and escape from
predators. Now science is looking to exploit silk's properties as a
way to deliver medicines and heal our bodies.
 American households are among the most energy-hungry on the planet,
consuming on average around 11,000 kilowatt-hours (kWh) of energy each
year. Electric water heaters alone use between 380-500 kWh per month.
So developing generation from natural tidal movement would appear to be
one of the best ways to meet demand and reduce greenhouse gas emissions.
 Desalination is one of the most widespread clean water technologies
on the planet and its use is essential for dry regions with poor-quality
fresh water supply. So a new low-cost solar-powered desalination
device could be the ideal solution to make water purify-cation more
widely affordable and environmentally friendly.
 No matter what, it's not much of a threat to us surface-bound folks.
We have our trusty atmosphere to protect us against any deadly cosmic
radiation. But orbiting satellites can run into issues without our
magnetic field in place to protect them: already the South Atlantic
Anomaly is a place best avoided, as the reduced magnetic protection
causes some glitches in the delicate hardware of our satellites.
 Vertical farming is a hugely promising agricultural technique that
aims to produce more food to meet the growing population on our finite
planet. Techniques include growing in vertical frames or even in
high-rise farms, saving on precious ground space, while moving farms
into urban areas, and producing nutritious crops without topsoil.
 When you zoom out to the big picture (and I mean 'big' here, as in
really big), all the problems and conflicts that have beset humanity
ever since there was a humanity are almost laughably parochial. From
the perspective of orbiting astronauts everything just dissolves.
National borders are revealed to be nothing more than imaginary lines
on a map. Majestic cities are reduced to smudges of grey. Great
monuments of heroes and deeds and barely discernible.
 Using a multi-layered vertical array of evaporators and condensers
allows each unit to operate like a solar still, creating pure distilled
water as vapor moves upwards through each layer. As vapor condenses
on a surface it releases heat. Each stage then reuses that heat in the
next evaporation process instead of wasting it.
 Climate change is cited for the introduction of West Nile virus to
the US. West Nile is spread by the mosquito species Culex and finds a
natural reservoir in birds. People become infected by mosquito bites
and that can cause damage to the brain and central nervous system, or
even death. Research shows that Culex population growth is linked to
higher temperatures, high humidity and drought. Approximately seven
million people were infected in the US between 1999 and 2016.`;
                setTimeout(() => {
                    document.querySelector("#article-main-part").textContent = window.thisWeb.article.replaceAll("\n", " ");
                }, 300)

                colorChange(0, 265);
            }
        })
        document.querySelector("#article-option-bar-article-box-setting-文章2").addEventListener("click", () => {
            if (window.thisWeb.article != `    These oscillations can be monitored from hundreds of miles away so
storm chasers do not need to get so close to get data. Using this
method alone could increase warning times and decrease false alarms.
Scientists are now adapting instruments that were built to detect
illegal nuclear weapons testing to listen in on storms from afar.
 Our body's chemical and physical make-up and the way it functions
are incredibly complex. Human bodies are estimated to contain up to
one hundred trillion cells. We need fuel for these cells to function,
provided by molecules, compounds, and chemical elements, yet 99% of
our body's mass consists of just six elements.
 In the winter, New Delhi looks like the something from the sets of
a Black Mirror episode. Last year, clips were making the rounds of a
series of accidents on the Yamuna Expressway between NOIDA, a city
outside New Delhi that is part of the National Capital Region and the
city of Agra. The air was so thick with smog and pollution that when
one car stalled, subsequent cars could not tell until it was too late.
Similar accidents were reported across the region. The visibility was
like a cloud of smoke from a chimney had descended onto the highway.
 Every star you see in the sky, including the sun, will someday die.
It's best to get used to that idea now, before things start to get
heavy. Thankfully, we've got a little bit of time. Our sun currently
powers itself through the fusion of hydrogen into helium in its core.
This is generally a good thing, since that fusion process provides
all the heat and light and warmth that we have come to enjoy on our
little watery rock, 93 million miles away.
 You'd narrow the aperture, which keeps the light-collecting area on
the lens small to avoid letting in too much light: the same reason
your pupils constrict in bright sunlight. You'd also speed up the
shutter speed so the camera sensor would only let in light for a brief
moment. If you wanted to take a picture of that same friend at night,
you'd probably slow down the shutter speed and widen the aperture
so you could let in enough light for a good shot.
 People who spend part of their time up north and the other part in
Southwest Florida and other parts of the state must decide what they
will do during the time they would normally travel down south. We
spoke to a few northerners Wednesday, who say the continued rise in
daily reported cases could be a deal breaker when assessing a return
to the region. And a health expert we spoke to said, once here, it's
not easy to stay indoors with all the amenities, including the beach,
the area has to offer. But prevention is still possible.
 Medium-sized stars, like our own sun, deplete their usable hydrogen
in only a few billion years, which is plenty of time for little critters
to grow up on some watery orbiting world and start asking questions.
When stars like our sun die, they turn themselves inside out in a
grotesque slow-motion horror show, eventually revealing their carbon
and oxygen cores and leaving behind a glittering nebula.`) {
                window.thisWeb.article = `    These oscillations can be monitored from hundreds of miles away so
storm chasers do not need to get so close to get data. Using this
method alone could increase warning times and decrease false alarms.
Scientists are now adapting instruments that were built to detect
illegal nuclear weapons testing to listen in on storms from afar.
 Our body's chemical and physical make-up and the way it functions
are incredibly complex. Human bodies are estimated to contain up to
one hundred trillion cells. We need fuel for these cells to function,
provided by molecules, compounds, and chemical elements, yet 99% of
our body's mass consists of just six elements.
 In the winter, New Delhi looks like the something from the sets of
a Black Mirror episode. Last year, clips were making the rounds of a
series of accidents on the Yamuna Expressway between NOIDA, a city
outside New Delhi that is part of the National Capital Region and the
city of Agra. The air was so thick with smog and pollution that when
one car stalled, subsequent cars could not tell until it was too late.
Similar accidents were reported across the region. The visibility was
like a cloud of smoke from a chimney had descended onto the highway.
 Every star you see in the sky, including the sun, will someday die.
It's best to get used to that idea now, before things start to get
heavy. Thankfully, we've got a little bit of time. Our sun currently
powers itself through the fusion of hydrogen into helium in its core.
This is generally a good thing, since that fusion process provides
all the heat and light and warmth that we have come to enjoy on our
little watery rock, 93 million miles away.
 You'd narrow the aperture, which keeps the light-collecting area on
the lens small to avoid letting in too much light: the same reason
your pupils constrict in bright sunlight. You'd also speed up the
shutter speed so the camera sensor would only let in light for a brief
moment. If you wanted to take a picture of that same friend at night,
you'd probably slow down the shutter speed and widen the aperture
so you could let in enough light for a good shot.
 People who spend part of their time up north and the other part in
Southwest Florida and other parts of the state must decide what they
will do during the time they would normally travel down south. We
spoke to a few northerners Wednesday, who say the continued rise in
daily reported cases could be a deal breaker when assessing a return
to the region. And a health expert we spoke to said, once here, it's
not easy to stay indoors with all the amenities, including the beach,
the area has to offer. But prevention is still possible.
 Medium-sized stars, like our own sun, deplete their usable hydrogen
in only a few billion years, which is plenty of time for little critters
to grow up on some watery orbiting world and start asking questions.
When stars like our sun die, they turn themselves inside out in a
grotesque slow-motion horror show, eventually revealing their carbon
and oxygen cores and leaving behind a glittering nebula.`;
                setTimeout(() => {
                    document.querySelector("#article-main-part").textContent = window.thisWeb.article.replaceAll("\n", " ");
                }, 300)

                colorChange(0, 265);
            }

        })
        document.querySelector("#article-option-bar-article-box-setting-文章3").addEventListener("click", () => {
            if (window.thisWeb.article != `    Michael Jordan, who grew up in Wilmington, North Carolina, close to
where Florence came ashore as a Category 1 hurricane, has donated $2
million to relief and recovery agencies. "It's truly devastating for me
to see the damage that Hurricane Florence is doing to my beloved home
state of North Carolina and to the surrounding areas," Jordan, who is
the owner of the Charlotte Bobcats of the NBA, said last week in a
statement posted on the team's website announcing its charity work.
 Kipchoge's split times left many viewers scratching their heads as
they tried to work out just how fast the race was won. The Kenyan was
led out from the start by three pacemakers and he clocked the first 10
kilometers in world record pace. Shortly after the halfway mark, all
three pacemakers dropped out, leaving Kipchoge to run the final 10 miles
alone. But where most athletes would struggle, Kipchoge continued to
defy the odds and instead of falling off the pace, he actually sped up.
 Prince William went on rhino spotting trip in Namibia to learn more
about conservation and the illegal wildlife trade in Africa. The Duke
of Cambridge went rhino spotting with a team of local rangers on a 5am
trek in the country's mountainous region, Kensington Palace said in
a tweet. He praised the "beauty and sheer remoteness" of Namibia's
landscape as he spotted a rare black rhino after five hours. The
Duke of Cambridge said he was humbled by the rangers dedication towards
protecting Namibia's rhinos population from poachers.
 "Q" words are always tough, especially those without a "u" in them.
Players can monetize with the word qapik, which is a unit of currency
in Azerbaijan. The updated version of the players dictionary continues
to follow some of the game's most important rules. Words must still
come from the standard dictionary. No abbreviations, capitalized words
or words with punctuation are allowed.
 Every week seems to bring new confirmation we've officially entered
the era of too much tourism. There's been sand pilfering in Sardinia
and Venice visitors threatened with fines for sitting down. Over in
Rome, there's been selfie-based violence and illegal bathing. In
Madrid, stringent rules have been put in place to handle Airbnb as
locals fear being priced out of the city.
 FIFA has suspended Sierra Leone from world football over claims of
government interference. The suspension comes after FIFA sent a letter
to the country's Minister of Sports expressing "grave concern" about the
removal of the football association president, Isha Johansen and the
association's General Secretary, Christopher Kamara.
 But a study released this week found that the Brazilian bird is now
extinct in the wild. The Spix's macaw is one of eight bird species,
half of them in Brazil, confirmed extinct or suspected extinct in the
report from BirdLife International. Deforestation is a leading cause
of the Spix's macaw's disappearance from its natural habitat, according
to the report. For the first time, extinctions on the mainland are
outpacing those on islands, the study says.`) {
                window.thisWeb.article = `    Michael Jordan, who grew up in Wilmington, North Carolina, close to
where Florence came ashore as a Category 1 hurricane, has donated $2
million to relief and recovery agencies. "It's truly devastating for me
to see the damage that Hurricane Florence is doing to my beloved home
state of North Carolina and to the surrounding areas," Jordan, who is
the owner of the Charlotte Bobcats of the NBA, said last week in a
statement posted on the team's website announcing its charity work.
 Kipchoge's split times left many viewers scratching their heads as
they tried to work out just how fast the race was won. The Kenyan was
led out from the start by three pacemakers and he clocked the first 10
kilometers in world record pace. Shortly after the halfway mark, all
three pacemakers dropped out, leaving Kipchoge to run the final 10 miles
alone. But where most athletes would struggle, Kipchoge continued to
defy the odds and instead of falling off the pace, he actually sped up.
 Prince William went on rhino spotting trip in Namibia to learn more
about conservation and the illegal wildlife trade in Africa. The Duke
of Cambridge went rhino spotting with a team of local rangers on a 5am
trek in the country's mountainous region, Kensington Palace said in
a tweet. He praised the "beauty and sheer remoteness" of Namibia's
landscape as he spotted a rare black rhino after five hours. The
Duke of Cambridge said he was humbled by the rangers dedication towards
protecting Namibia's rhinos population from poachers.
 "Q" words are always tough, especially those without a "u" in them.
Players can monetize with the word qapik, which is a unit of currency
in Azerbaijan. The updated version of the players dictionary continues
to follow some of the game's most important rules. Words must still
come from the standard dictionary. No abbreviations, capitalized words
or words with punctuation are allowed.
 Every week seems to bring new confirmation we've officially entered
the era of too much tourism. There's been sand pilfering in Sardinia
and Venice visitors threatened with fines for sitting down. Over in
Rome, there's been selfie-based violence and illegal bathing. In
Madrid, stringent rules have been put in place to handle Airbnb as
locals fear being priced out of the city.
 FIFA has suspended Sierra Leone from world football over claims of
government interference. The suspension comes after FIFA sent a letter
to the country's Minister of Sports expressing "grave concern" about the
removal of the football association president, Isha Johansen and the
association's General Secretary, Christopher Kamara.
 But a study released this week found that the Brazilian bird is now
extinct in the wild. The Spix's macaw is one of eight bird species,
half of them in Brazil, confirmed extinct or suspected extinct in the
report from BirdLife International. Deforestation is a leading cause
of the Spix's macaw's disappearance from its natural habitat, according
to the report. For the first time, extinctions on the mainland are
outpacing those on islands, the study says.`;
                setTimeout(() => {
                    document.querySelector("#article-main-part").textContent = window.thisWeb.article.replaceAll("\n", " ");
                }, 300)

                colorChange(0, 265);
            }

        })
    }());
    //~ 選單個別設定: 時間
    (function () {
        let oneMinute = optionbar.optionBarElement
            .querySelector("#article-option-bar-time-box-setting-1分鐘");
        let fiveMinute = optionbar.optionBarElement
            .querySelector("#article-option-bar-time-box-setting-5分鐘");
        let tenMinute = optionbar.optionBarElement
            .querySelector("#article-option-bar-time-box-setting-10分鐘");
        oneMinute.addEventListener("click", () => {
            window.thisWeb.time = 1;
        })
        fiveMinute.addEventListener("click", () => {
            window.thisWeb.time = 5;
        })
        tenMinute.addEventListener("click", () => {
            window.thisWeb.time = 10;
        })
    }());
})

