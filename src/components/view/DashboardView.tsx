import React from "react"
import EventCard from "../EventCard"

export default function DashboardView() {
  return (
    <ol
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px ,1fr))",
        listStyle: "none",
        gap: 16,
      }}
    >
      {itemData.map((item, key) => (
        <li key={key}>
          <EventCard event={item} />
        </li>
      ))}
    </ol>
  )
}

const itemData = [
  {
    description:
      "Do elit sit cillum tempor laboris ullamco dolore non commodo dolore minim. Officia deserunt tempor pariatur nostrud voluptate cupidatat. Labore dolore Lorem eiusmod officia ex eu aute officia. Proident incididunt eu Lorem occaecat laboris anim nisi. Laboris eu ut culpa eu commodo elit sit irure dolore quis incididunt sint incididunt. Minim nulla magna ullamco nulla reprehenderit commodo voluptate minim in ipsum tempor elit.Ut nisi reprehenderit ut voluptate. Nulla occaecat aliqua duis duis. Esse consectetur aliqua eiusmod exercitation exercitation nostrud magna id esse sint occaecat consectetur aliquip veniam. Minim sunt deserunt pariatur anim ex do in quis. Amet mollit cupidatat aute velit aliquip aliqua sit sint et ipsum. Incididunt nisi exercitation magna excepteur nisi consequat dolor sit eiusmod magna tempor laboris ullamco esse.",
    imgUrl: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    description:
      "Minim ut laborum excepteur laborum magna non ipsum. Fugiat aliquip et aliquip ex duis amet. Enim adipisicing minim sint ipsum excepteur eiusmod. Voluptate exercitation elit pariatur aliquip tempor reprehenderit nisi laborum.Laboris magna incididunt non cupidatat dolore culpa. Id in fugiat laboris reprehenderit fugiat commodo excepteur exercitation in. Qui cupidatat esse laboris officia ea ut velit ea consectetur. Aute deserunt labore ut ullamco fugiat sint. Elit aliquip qui duis ad ullamco irure adipisicing sint exercitation ut ullamco eiusmod occaecat.",
    imgUrl: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    description:
      "Commodo cillum aliqua labore reprehenderit aliqua eu duis enim. Consectetur ex esse mollit ea fugiat dolor velit nisi ut in magna enim anim duis. Reprehenderit nostrud culpa anim anim nostrud do deserunt reprehenderit incididunt esse excepteur excepteur anim. Ullamco laborum deserunt consequat veniam proident aute ex minim deserunt veniam id. Aliqua non fugiat amet nulla ut officia laboris incididunt. Quis eiusmod dolore amet in ullamco dolor excepteur labore sunt velit id cillum duis anim. Voluptate aute elit aliqua voluptate commodo veniam sunt anim.Magna eu pariatur voluptate minim magna et enim fugiat laborum est ipsum culpa dolor enim. Excepteur reprehenderit occaecat nostrud anim veniam velit id proident. Eu non veniam ex irure excepteur velit esse veniam eu non tempor proident aliquip. Consectetur nisi duis ullamco deserunt consequat minim nulla mollit sit cupidatat nisi ex veniam.",
    imgUrl: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    description:
      "Excepteur esse deserunt enim culpa eu id sint culpa commodo nostrud Lorem proident. Culpa fugiat non veniam sint id pariatur. Amet aliquip officia cupidatat pariatur et minim cillum velit. Ad fugiat amet eu sit cupidatat Lorem aliquip velit laborum proident incididunt. Est aute nisi magna culpa sint laborum veniam irure dolor irure esse commodo. Magna incididunt quis excepteur eu ipsum enim sint magna deserunt.Sint enim esse esse consectetur ut et aliqua culpa nulla consectetur consectetur. Tempor sit fugiat exercitation ullamco eu. Enim esse ullamco incididunt amet duis occaecat qui quis. Commodo deserunt sint Lorem eiusmod. Enim mollit mollit qui adipisicing esse Lorem ea sit nisi id.",
    imgUrl: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    description:
      "Laboris aliquip culpa excepteur excepteur ipsum dolor dolor incididunt labore ad aute. Sunt est adipisicing nulla cupidatat proident id ex do labore ullamco. Consequat fugiat labore nulla fugiat consequat. Eu laborum mollit Lorem laborum eiusmod aliquip irure exercitation mollit. Amet reprehenderit est irure excepteur id esse duis in. Laboris labore esse irure anim dolore laborum nostrud occaecat culpa in ullamco. Cillum et eu est ipsum in labore labore incididunt veniam.Aute est sunt duis cupidatat. Commodo id aliquip sit sint commodo consequat commodo. Cillum duis laboris anim nulla sunt duis. Aliqua fugiat velit amet amet pariatur enim reprehenderit proident do est sunt. Aute aute incididunt id cillum consequat duis excepteur non fugiat ad nostrud ea magna.",
    imgUrl: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    description:
      "Nulla adipisicing et nulla adipisicing amet Lorem nisi ad eiusmod do nulla consectetur Lorem Lorem. Labore occaecat sunt ut do reprehenderit mollit ad proident nostrud ad voluptate. Adipisicing ullamco cillum occaecat ullamco qui non aliquip amet. Ullamco pariatur esse aliqua dolore quis in culpa ex tempor aliqua officia deserunt fugiat.Voluptate ullamco sunt elit quis eu ex anim veniam dolore irure. Sit eiusmod est velit nisi dolore ex eu eiusmod ea elit duis proident labore aute. Esse eu eu pariatur sunt ea duis enim sit id consequat labore esse excepteur reprehenderit. Consectetur labore eiusmod culpa id.",
    imgUrl: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    description:
      "Pariatur sint officia do tempor ullamco sint nisi laborum pariatur occaecat duis reprehenderit eiusmod duis. Proident sunt laborum sunt non aute dolor culpa voluptate commodo aute laboris. Quis ullamco ea quis mollit. Nostrud irure pariatur sit cillum voluptate esse deserunt minim elit proident ex aliqua magna. Eu et commodo officia ex.Sit reprehenderit excepteur cupidatat deserunt ut quis. Mollit enim ad qui incididunt eiusmod laboris magna adipisicing aliqua et adipisicing nulla sit. Nostrud ex ex ea elit quis est. Elit et laborum dolore eu do qui voluptate.",
    imgUrl: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    description:
      "Irure dolor adipisicing duis fugiat laboris fugiat deserunt dolore adipisicing nulla velit amet et nostrud. Culpa mollit veniam elit Lorem qui est laboris mollit. Elit consequat duis sint nisi laboris culpa pariatur id Lorem anim. Ullamco adipisicing pariatur dolore cillum.Ad ipsum ad ea ipsum ut aute minim sint aute amet ipsum esse incididunt. Esse enim adipisicing sunt pariatur velit dolore. Consequat fugiat ipsum elit labore id pariatur quis sit. Officia duis sunt velit id sit incididunt ad ipsum. Sunt adipisicing voluptate laboris quis eu sunt magna tempor sunt ad pariatur et. Mollit labore pariatur tempor cillum reprehenderit in fugiat ad. Do ullamco sit cupidatat eu velit qui elit aute quis nulla dolor.",
    imgUrl: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    description:
      "Minim laboris amet mollit aliquip incididunt sint esse. Nisi laboris eu ipsum officia sunt magna commodo mollit labore ad qui pariatur. Excepteur dolore non minim ipsum cillum aliquip consequat dolore excepteur amet et. Adipisicing est Lorem pariatur eu cupidatat reprehenderit aliquip nisi veniam enim. Do elit adipisicing Lorem do esse. Velit irure eiusmod officia amet. Exercitation ea commodo non voluptate ut tempor minim elit non nisi minim aute occaecat.Consequat laborum aliquip mollit pariatur eu magna aute aliquip cupidatat do exercitation sit ipsum. Incididunt cillum ex nulla ut mollit exercitation mollit pariatur irure reprehenderit mollit consectetur elit. Incididunt incididunt duis ullamco adipisicing consectetur esse cupidatat velit. Ex non ex consequat reprehenderit consectetur ipsum et ut laboris cillum. Elit ad minim sit labore. Non ipsum eu fugiat nisi ipsum ullamco.",
    imgUrl: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    description:
      "Anim amet do nisi sint fugiat eiusmod exercitation veniam proident. Nulla duis ex ipsum labore ut do eu consequat voluptate Lorem adipisicing ex ipsum. Ipsum consequat adipisicing do ullamco aute enim fugiat ipsum enim in adipisicing. Ipsum tempor magna est exercitation elit ullamco Lorem incididunt. Proident officia aute aute Lorem nulla in enim ea adipisicing nulla officia amet. Irure eiusmod veniam laboris consectetur irure non nulla nostrud excepteur labore pariatur.Mollit elit dolore culpa ullamco aute non nisi ad. Do anim dolore voluptate dolore enim labore nisi. Non ut proident fugiat anim consectetur ullamco sunt consequat ex duis nulla minim.",
    imgUrl: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    description:
      "Mollit do elit ullamco deserunt commodo laborum consequat aute consequat. Pariatur quis commodo consectetur reprehenderit proident minim nisi officia laborum in nisi nisi aliquip aute. Laboris id irure incididunt nisi laboris sunt aliqua adipisicing dolore velit in fugiat consequat consectetur. Exercitation laboris proident enim laborum eu nostrud est mollit tempor id est occaecat.Nostrud ad proident deserunt labore aliqua veniam dolor anim voluptate aute consequat incididunt. Esse sint eu ullamco qui incididunt pariatur elit esse duis culpa incididunt nisi. Sint officia sunt commodo duis laborum eiusmod sint sint duis nulla. In aliqua commodo occaecat labore nisi.",
    imgUrl: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    description:
      "Proident aliquip ut reprehenderit exercitation dolore ex pariatur laboris. Nulla commodo duis aute officia do minim in culpa reprehenderit magna eiusmod. Eiusmod dolor reprehenderit ipsum duis commodo id anim qui pariatur.Enim sint ea ipsum sint amet. Ea mollit elit occaecat minim et est ullamco eu enim laboris. Anim exercitation dolore non sunt aute culpa veniam et ipsum non ut sunt. Labore consequat reprehenderit elit veniam eu in do ut consequat. Et officia nostrud id proident ex cupidatat occaecat anim anim ea.",
    imgUrl: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
]
