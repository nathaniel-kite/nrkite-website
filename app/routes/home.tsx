import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Nrkite" },
    { name: "description", content: "Welcome to the Nrkite website." },
  ];
}

export default function Home() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-heading font-bold mb-4">Linguistic Typology</h1>
      <div className="space-y-6 text-muted-foreground">
        <p>
          Linguistic typology is a subfield of linguistics that deals with the structural
          variation among the world's languages. Rather than focusing on the historical
          relationships between languages, typologists seek to identify universal patterns
          and constraints on the possible forms that human languages can take. The discipline
          examines phenomena across genetically unrelated languages to distinguish what is
          accidental from what is necessary in the architecture of human language.
        </p>

        <h2 className="text-2xl font-heading font-semibold text-foreground">Word Order Typology</h2>
        <p>
          One of the most fundamental classifications in linguistic typology concerns the
          basic order of constituents in a sentence. The most widely studied parameter is
          the relative order of subject (S), verb (V), and object (O) in declarative
          sentences. Of the six logically possible orderings, three dominate the world's
          languages: SOV, SVO, and VSO.
        </p>
        <p>
          SOV (Subject-Object-Verb) is the most common word order, found in approximately
          45% of the world's languages. Languages such as Japanese, Korean, Turkish, Hindi,
          and Latin follow this pattern. In SOV languages, modifiers typically precede the
          heads they modify, and postpositions are used rather than prepositions. The verb
          tends to appear at the end of the clause, which can create interesting processing
          challenges for speakers who must hold all arguments in memory before encountering
          the predicate.
        </p>
        <p>
          SVO (Subject-Verb-Object) is the second most common order, accounting for roughly
          42% of languages. English, Mandarin Chinese, French, Thai, and many Niger-Congo
          languages use this order. SVO languages tend to show a mix of head-initial and
          head-final properties, making them somewhat intermediate between the more
          consistent patterns found in pure SOV or VSO languages. The SVO order is often
          associated with a relatively fixed word order and the use of prepositions.
        </p>
        <p>
          VSO (Verb-Subject-Object) order is found in about 9% of languages, including
          Classical Arabic, Irish, Welsh, Tagalog, and Mayan languages. VSO languages
          tend to be strongly head-initial, with prepositions, genitives following nouns,
          and relative clauses following the head noun. The verb-initial position has been
          the subject of extensive theoretical debate, with analyses ranging from verb
          movement to base-generated verb-initial structures.
        </p>
        <p>
          The remaining three orders — VOS, OVS, and OSV — are considerably rarer. VOS
          occurs in some Austronesian languages such as Malagasy and in several Mayan
          languages. OVS is extremely rare as a basic order, though it appears in some
          Amazonian languages such as Hixkaryana. OSV is arguably the rarest, with claims
          for a few Amazonian languages like Nadëb, though these analyses are sometimes
          disputed.
        </p>

        <h2 className="text-2xl font-heading font-semibold text-foreground">Morphological Typology</h2>
        <p>
          Morphological typology classifies languages based on how words are formed and how
          morphemes combine. The traditional classification, dating back to the early
          nineteenth century, distinguishes four major types: isolating, agglutinative,
          fusional, and polysynthetic.
        </p>
        <p>
          Isolating (or analytic) languages have a low morpheme-to-word ratio, with most
          words consisting of a single morpheme. Vietnamese and Mandarin Chinese are classic
          examples. In these languages, grammatical relationships are expressed primarily
          through word order and separate function words rather than through inflectional
          affixes. Isolating languages tend to have rich tonal systems, possibly as a
          compensatory mechanism for the loss of morphological complexity.
        </p>
        <p>
          Agglutinative languages string together morphemes in a linear sequence, with each
          morpheme typically encoding a single grammatical meaning. Turkish, Finnish,
          Hungarian, Japanese, and Swahili are well-known agglutinative languages. In
          Turkish, for example, the word "evlerimden" (from my houses) consists of four
          clearly segmentable morphemes: ev (house) + ler (plural) + im (possessive) + den
          (ablative). The boundaries between morphemes are clean, and each morpheme has a
          relatively consistent form.
        </p>
        <p>
          Fusional (or inflectional) languages also use affixes, but each affix typically
          encodes multiple grammatical categories simultaneously, and the boundaries between
          morphemes are often blurred. Latin, Russian, Sanskrit, and Arabic are classic
          fusional languages. In the Latin word "amo" (I love), the suffix -o simultaneously
          encodes first person, singular number, active voice, indicative mood, and present
          tense. Fusional languages frequently exhibit irregularity and allomorphy, as the
          fusion of multiple meanings into a single form creates pressure for phonological
          reduction and irregularity over time.
        </p>
        <p>
          Polysynthetic languages combine an extremely high number of morphemes per word,
          often incorporating what would be separate words in other languages into a single
          complex verbal form. Many Indigenous languages of the Americas, such as
          Mohawk, Inuktitut, and Nahuatl, are polysynthetic. In Mohawk, a single verb can
          encode the subject, object, tense, aspect, and various adverbial meanings,
          effectively expressing what would require an entire sentence in English.
        </p>

        <h2 className="text-2xl font-heading font-semibold text-foreground">Head-Directionality Parameter</h2>
        <p>
          The head-directionality parameter concerns whether the head of a phrase precedes
          or follows its dependents. This parameter manifests across multiple syntactic
          domains and shows significant cross-linguistic correlation. Languages tend to be
          consistently head-initial or head-final across several constructions, though pure
          consistency is rare.
        </p>
        <p>
          In head-initial languages, the head of a phrase precedes its complements. English
          is largely head-initial: verbs precede their objects, prepositions precede their
          complements, and complementizers precede their clauses. However, English also
          shows head-final patterns in certain domains, such as the placement of adjectives
          before nouns.
        </p>
        <p>
          In head-final languages, the head follows its complements. Japanese is a
          consistently head-final language: objects precede verbs, postpositions follow
          their nouns, relative clauses precede the head noun, and complementizers follow
          their clauses. The head-final pattern creates a structure where the most critical
          syntactic information often appears at the end of the phrase.
        </p>
        <p>
          The correlation between head-directionality across different phrase types has been
          the subject of extensive research. Greenberg's Universal 3 states that languages
          with dominant VSO order are always prepositional, while Universal 4 states that
          with overwhelmingly greater than chance frequency, languages with normal SOV order
          are postpositional. These correlations suggest deeper structural principles
          governing the organization of syntactic structures.
        </p>

        <h2 className="text-2xl font-heading font-semibold text-foreground">Case Systems</h2>
        <p>
          Languages vary dramatically in how they mark the grammatical relationships between
          nouns and other elements in the clause. Case systems are one of the primary
          mechanisms for encoding these relationships, and typological research has
          identified several major case alignment systems.
        </p>
        <p>
          Nominative-accusative alignment is the most common system, found in Indo-European,
          Semitic, and many other language families. In this system, the subject of an
          intransitive verb (S) and the subject of a transitive verb (A) are treated
          identically (nominative case), while the object of a transitive verb (P) receives
          different marking (accusative case). This alignment reflects a grouping of S and A
          as the more agent-like argument, distinct from P.
        </p>
        <p>
          Ergative-absolutive alignment treats S and P identically (absolutive case) while
          marking A differently (ergative case). This system is found in Basque, Georgian,
          Dyirbal, many Australian languages, and several languages of the Caucasus. The
          ergative pattern groups the intransitive subject with the transitive object,
          reflecting a perspective that treats the single argument of an intransitive clause
          as more similar to the patient of a transitive clause than to its agent.
        </p>
        <p>
          Some languages exhibit split ergativity, where the alignment system varies
          depending on factors such as tense, aspect, person, or clause type. Hindi-Urdu
          is a well-known split-ergative language: it shows ergative alignment in the
          perfective aspect but nominative-accusative alignment in the imperfective. This
          split suggests that case marking is not a fixed property of a language but can
          be sensitive to semantic and pragmatic factors.
        </p>
        <p>
          Other case systems include the active-stative (or split-S) alignment, where the
          single argument of an intransitive verb is marked like A or P depending on
          semantic factors such as volition, control, or affectedness. Languages with this
          system include Guarani, Lakhota, and several Eastern Caucasian languages. The
          existence of active-stative systems challenges the binary nominative-accusative
          versus ergative-absolutive distinction and suggests a more nuanced typological
          space.
        </p>

        <h2 className="text-2xl font-heading font-semibold text-foreground">Tonal Systems</h2>
        <p>
          Tone is a phonological feature in which pitch distinctions between syllables or
          words can change lexical or grammatical meaning. The typological distribution of
          tone is highly uneven: tone is pervasive in languages of sub-Saharan Africa, East
          and Southeast Asia, and the Americas, but largely absent from Europe and much of
          the Middle East.
        </p>
        <p>
          Languages are classified by the number of contrastive tone levels they distinguish.
          Many West African languages, such as Yoruba and Igbo, have two or three level
          tones. Mandarin Chinese has four lexical tones (plus a neutral tone) that combine
          level and contour properties. Cantonese distinguishes six or nine tones depending
          on the analysis, making it one of the most tonally complex major languages.
        </p>
        <p>
          Some languages, particularly in Southeast Asia, have developed tone through a
          process called tonogenesis, where the loss of consonantal distinctions (such as
          voicing or final consonants) creates compensatory pitch distinctions. Vietnamese
          and Thai both underwent tonogenesis historically, developing their rich tonal
          systems from earlier non-tonal ancestors. This process demonstrates how phonological
          systems can reorganize themselves to maintain informational content when segmental
          distinctions are lost.
        </p>

        <h2 className="text-2xl font-heading font-semibold text-foreground">Grammatical Gender and Noun Classes</h2>
        <p>
          Languages vary enormously in how they classify nouns. Some languages have no
          grammatical gender at all, while others have elaborate systems with dozens of
          noun classes. The typological study of gender systems reveals both the diversity
          and the constraints on possible classification systems.
        </p>
        <p>
          The Indo-European gender system, typically with two or three genders (masculine,
          feminine, and sometimes neuter), is just one possibility. Bantu languages of
          Africa have some of the most elaborate noun class systems, with Swahili having
          approximately 18 noun classes marked by prefixes. These classes group nouns by
          semantic categories such as humans, animals, plants, abstract concepts, and
          diminutives, but the assignment is not always semantically transparent.
        </p>
        <p>
          Some languages have gender systems based on entirely different principles. The
          Australian language Dyirbal famously has four noun classes: (1) animate beings and
          men, (2) women, water, fire, fighting, and danger, (3) edible fruits and
          vegetables, and (4) everything else. The grouping of women with fire and danger
          in a single class has been the subject of extensive cultural and linguistic
          analysis.
        </p>

        <h2 className="text-2xl font-heading font-semibold text-foreground">Implicational Universals</h2>
        <p>
          One of the most powerful tools in linguistic typology is the implicational
          universal, a statement of the form "if a language has property X, then it also
          has property Y." These universals reveal asymmetric dependencies between
          linguistic features and constrain the space of possible human languages.
        </p>
        <p>
          Greenberg's forty-five universals, published in 1963, remain foundational.
          Universal 1 states that in declarative sentences with nominal subject and object,
          the dominant order is almost always one in which the subject precedes the object.
          Universal 2 states that in languages with prepositions, the genitive almost
          always follows the governing noun, while in languages with postpositions, it
          almost always precedes. These correlations reveal deep structural relationships
          between seemingly independent grammatical features.
        </p>
        <p>
          Modern typological research has expanded far beyond Greenberg's original
          universals, examining phenomena such as the relationship between relative clause
          position and adposition type, the correlation between basic word order and the
          placement of adverbial subordinators, and the interaction between case marking
          and agreement systems. The continued discovery of new implicational relationships
          supports the view that human languages are not infinitely variable but are
          constrained by universal cognitive and communicative pressures.
        </p>

        <h2 className="text-2xl font-heading font-semibold text-foreground">Conclusion</h2>
        <p>
          Linguistic typology provides a framework for understanding both the remarkable
          diversity and the underlying unity of human languages. By comparing languages
          from different families and regions, typologists identify the parameters along
          which languages can vary and the universal principles that constrain this
          variation. The field continues to grow as more languages are documented and
          as computational methods enable the analysis of increasingly large and diverse
          linguistic datasets. Understanding typological patterns is essential not only
          for linguistic theory but also for language documentation, language teaching,
          natural language processing, and the study of human cognition more broadly.
        </p>
      </div>
    </div>
  );
}
