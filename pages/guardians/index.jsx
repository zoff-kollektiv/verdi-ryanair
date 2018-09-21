import Footer from '../../components/footer';
import Guardians from '../../components/guardians';
import Header from '../../components/header';
import Layout from '../../components/layout';
import Text from '../../components/text';
import TextHeadline from '../../components/text-headline';

export default () => (
  <Layout>
    <Header
      name="Rights at Ryanair"
      navigation={[
        ['Members', '/'],
        ['Guardians', '/guardians', true],
        ['Press', '/press'],
      ]}
    />

    <Text
      title="Guardians"
    >
      <TextHeadline>How it all started</TextHeadline>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
    </Text>

    <Guardians
      people={[
        {
          name: 'Bettina Wilhelm',
          role: 'Landesfrauenbeauftragte und Mitglied des Aufsichtsrats des Flughafens Bremen',
          quote: `
            Ich bin Patin für die ver.di-Tarifkommission bei Ryanair, weil Tarifverträge dafür sorgen, dass die Leistung von Beschäftigten angemessen, transparent und verlässlich bewertet und entlohnt wird.
          `
        },

        {
          name: 'Frank Bsirkse',
          role: 'Vorsitzender der Gewerkschaft ver.di',
          quote: `
            Ich bin Pate für die ver.di-Tarifkommission bei Ryanair, weil sich Arbeitnehmer/innen mit Tarifverträgen besser stellen und die Kolleg/innen bei Ryanair das auch verdient haben.
          `
        },

        {
          name: 'Cansel Kiziltepe',
          role: 'Mitglied des Deutschen Bundestages',
          quote: `
            Ich bin Patin für ver.di Tarifkommission bei Ryanair, weil schnell faire Arbeitsbedingungen für Flugbegleiter*innen geschaffen werden müssen.
          `
        },

         {
          name: 'Thorsten Schäfer-Gümbel',
          role: 'Stellvertretender SPD-Bundesvorsitzender',
          quote: `
            Ich unterstütze die Gewerkschaften bei ihren Tarifverhandlungen mit Ryanair, weil Löhne und Arbeitsbedingungen bei uns nicht einseitig festgelegt sondern zwischen den Tarifparteien fair ausgehandelt werden. Die Geltendmachung von Arbeitnehmerinteressen ist geschützt, der Zusammenschluss in Gewerkschaften und Verbänden und der Arbeitskampf haben hier Verfassungsrang. Auch Unternehmen wie Ryanair, die Dumpinglöhne, prekäre Beschäftigung und Druck auf Arbeitnehmerinnen und Arbeitnehmer zum Geschäftsmodell gemacht haben, müssen wissen: Die SPD ist in dieser Frage nicht neutral sondern klar auf der Seite der Beschäftigten.
          `
        },

         {
          name: 'Bernd Riexinger',
          role: 'Stellvertretender SPD-Bundesvorsitzender',
          quote: `
            Ich unterstütze die Gewerkschaften bei ihren Tarifverhandlungen mit Ryanair, weil Löhne und Arbeitsbedingungen bei uns nicht einseitig festgelegt sondern zwischen den Tarifparteien fair ausgehandelt werden. Die Geltendmachung von Arbeitnehmerinteressen ist geschützt, der Zusammenschluss in Gewerkschaften und Verbänden und der Arbeitskampf haben hier Verfassungsrang. Auch Unternehmen wie Ryanair, die Dumpinglöhne, prekäre Beschäftigung und Druck auf Arbeitnehmerinnen und Arbeitnehmer zum Geschäftsmodell gemacht haben, müssen wissen: Die SPD ist in dieser Frage nicht neutral sondern klar auf der Seite der Beschäftigten.
          `
        },

         {
          name: 'Arno Klare',
          role: 'Vorsitzender der Partei DIE LINKE',
          quote: `
            Die Kabinenbeschäftigten von Ryanair sind mutige Heldinnen und Helden. Sie nehmen den Kampf mit einem schier übermächtigen Konzern auf und streben einen Tarifvertrag an. Ich drücke ihnen die Daumen! Ihr Engagement nutzt allen Beschäftigten in Deutschland. Es kann nicht angehen, dass internationale Konzerne ihre Profite durch Lohndumping auf dem Rücken der Beschäftigten machen. Nur ein Tarifvertrag kann nachhaltige Verbesserungen und gleichwertige Arbeitsbedingungen für alle Flugbegleiterinnen und Flugbegleiter bei Ryanair in Deutschland sicherstellen!
          `
        },

         {
          name: 'Peter Feldmann',
          role: 'Oberbürgermeister von Frankfurt',
          quote: `
            Tarifverträge, die zwischen Gewerkschaften und Arbeitgeber auf Augenhöhe verhandelt werden, sind Basis für gute Arbeitsbedingungen für jeden Arbeitnehmer und Grundlage für den Erfolg unsers Wirtschaftsmodells. Deshalb freue ich mich, dass Ryanair zu Tarifverhandlungen bereit ist. Hoffentlich gehören prekäre Beschäftigung und Dumpinglöhne endlich der Vergangenheit an.
          `
        },

         {
          name: 'Hakan Bölükmese',
          role: 'ver.di VL Sprecher Fraport und Mitglied im Aufsichtsrat Fraport',
          quote: `
            Ich bin Pate für die ver.di-Tarifkommission bei Ryanair, weil die Kollegen und Kolleginnen schon längst bessere Arbeits- und Tarifbedingungen verdiENT haben.
          `
        },

         {
          name: 'Behrad Ghofrani',
          role: 'Betriebsratsvorsitzender WISAG, Flughafen Frankfurt',
          quote: `
            Ich bin Pate für die ver.di-Tarifkommission bei Ryanair, weil wir die führende Low Coast Airline abfertigen am Flughafen Frankfurt, daher kenne ich die Folgen für unsere Kollegen aus den Bodenverkehrsdiensten sehr gut.
          `
        },

         {
          name: 'Christine Behle',
          role: 'Bundesvorstand der Gewerkschaft ver.di',
          quote: `
            Ich bin Patin für die ver.di-Tarifkommission bei Ryanair, weil faire Arbeitsbedingungen und Einkommen bei Ryanair längst überfällig sind. Gemeinsam mit anderen Gewerkschaften in ganz Europa wollen wir gute Tarifverträge durchsetzen.
          `
         },

         {
          name: 'Mehdi Nazem Schariflou',
          role: 'Aufsichtsratsmitglied Fraport, stellv Aufsichtsratsvorsitzender, Betriebsratsvorsitzender der Firma Frasec am Frankfurter Flughafen',
          quote: `
              Ich bin Pate für die die ver.di Tarifkommission, weil gute Arbeit auch gerechte Bezahlung verdient.
          `
         },

         {
          name: 'Quadeer Rana',
          role: 'Oberbürgermeister von Frankfurt',
          quote: `
            Tarifverträge, die zwischen Gewerkschaften und Arbeitgeber auf Augenhöhe verhandelt werden, sind Basis für gute Arbeitsbedingungen für jeden Arbeitnehmer und Grundlage für den Erfolg unsers Wirtschaftsmodells. Deshalb freue ich mich, dass Ryanair zu Tarifverhandlungen bereit ist. Hoffentlich gehören prekäre Beschäftigung und Dumpinglöhne endlich der Vergangenheit an.
          `
        },

         {
          name: 'Andreas Rimkus',
          role: 'MdB | SPD-Bundestagsfraktion',
          quote: `
            Ich bin Pate für die Tarifkommission bei Ryanair, weil wir uns Dumping im Luftverkehr mit Sicherheit nicht leisten können und wollen!
          `
        },

         {
          name: 'Claudia Amier',
          role: 'Oberbürgermeister von Frankfurt',
          quote: `
            Tarifverträge, die zwischen Gewerkschaften und Arbeitgeber auf Augenhöhe verhandelt werden, sind Basis für gute Arbeitsbedingungen für jeden Arbeitnehmer und Grundlage für den Erfolg unsers Wirtschaftsmodells. Deshalb freue ich mich, dass Ryanair zu Tarifverhandlungen bereit ist. Hoffentlich gehören prekäre Beschäftigung und Dumpinglöhne endlich der Vergangenheit an.
          `
        },

         {
          name: 'Peter Feldmann',
          role: 'Betriebsratsvorsitzende des gemeinsamen Betriebes der Fraport AG und der FRA-Vorfeldkontrolle GmbH, Flughafen Frankfurt, ver.di Bundesfachgruppenvorsitzende Luftverkehr',
          quote: `
            Ich bin Patin für die ver.di Tarifkommission bei Ryanair, weil es längst überfällig ist, den höchst prekären Arbeitsbedingungen ein Ende zu bereiten. Es muss Schluss sein mit nicht existenzsichernde Löhnen, mit der Nichteinhaltung von Sozial- und Sicherheitsstandards sowie dem massiven Einsatz von Leiharbeitnehmern.
          `
        },

         {
          name: 'Devrim Arslan',
          role: 'Betriebsratsvorsitzender der Fraground GmbH und Mitglied im Aufsichtsrat der Fraport und Fraground GmbH Flughafen Frankfurt',
          quote: `
            Ich bin Pate für die ver.di-Tarifkommission bei Ryanair, weil die Würde des Menschen unantastbar ist. Tarifverträge sind der Grundstein für einen fairen Arbeitsmarkt und sorgen für gerechte Arbeitsbedingungen.
          `
        },

         {
          name: 'Oliver Krischer',
          role: 'MdB, Bundestagsfraktion Bündnis 90/Die Grünen',
          quote: `
            Ich bin Pate für die ver.di-Tarifkommission bei Ryanair, weil ich finde, auch in der Luftverkehrsbranche müssen überall faire Arbeitsbedingungen herrschen.
          `
        },

         {
          name: 'Janine Wissler',
          role: 'Betriebsrätin bei der Flughafen Düsseldorf GmbH und Sprecherin der ver.di Vertrauensleute am Flughafen Düsseldorf',
          quote: `
            Ich bin Patin, weil ich solidarisch bin mit den Beschäftigten bei Ryanair und den anderen Fluglinien. Ryanair bedroht durch Lohndumping und seinen Umgang mit den Beschäftigten die Standards in der ganzen Luftverkehrsbranche. Deshalb muss endlich ein vernünftiger Tarifvertrag her.
          `
        },

         {
          name: 'Pascal Meiser',
          role: 'MdB, Fraktion DIE LINKE',
          quote: `
            Ich bin Pate für die ver.di Tarifkommission bei Ryanair, weil das Management endlich begreifen muss, dass wir ihm genau auf die Finger schauen, wie es sich gegenüber dem Kabinenpersonal verhält. Das rücksichtslose Profitemachen auf dem Rücken der Beschäftigten muss endlich aufhören.
          `
        },

         {
          name: 'Beate Müller-Gemmeke',
          role: 'MdB, Fraktion Bündnis 90/Die Grünen',
          quote: `
            Ich bin Patin für die ver.di Tarifkommission bei Ryanair, denn diese mutigen Beschäftigten haben Respekt, Anerkennung und Solidarität verdient. Sie brauchen Unterstützung bei ihrem Kampf für einen Tarifvertrag, für gute Löhne und gute Arbeitsbedingungen. Es muss Schluss sein mit Lohndumping. Auch Einschüchterung darf es nicht weiter geben. Ich wünsche den Beschäftigten einen langen Atem und viel Erfolg.
          `
        },

         {
          name: 'Norbert Schmitt',
          role: 'Abgeordneter des Hessischen Landtags',
          quote: `
            Immer mehr wird darüber bekannt, wie unfair und entwürdigend das Kabinenpersonal von Ryanair behandelt wird. Das entsetzt mich und deshalb habe ich mich entschlossen Pate zu werden. Um zu zeigen, dass die mutigen Mitarbeiterinnen und Mitarbeiter, die gegen eine solche Behandlung protestieren, nicht alleine stehen und Solidarität verdient haben. Mit den Ryanair-Beschäftigten muss endlich fair umgegangenen und das eigentlich selbstverständliche Recht auf ungehinderte Tarifverhandlungen muss voll und ganz anerkannt werden. Einschüchterungen und Schikanen dürfen keinen Platz haben. Die Beschäftigten brauchen endlich eine angemessene Bezahlung und ordentliche Arbeitsbedingen.
          `
        },

        ]}
    />

    <Footer title="Time to change at Ryanair" />
  </Layout>
);
