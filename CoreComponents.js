import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const CoreComponents = () => {
  // view: simple container to group logically related components
  // views can be used to display text, images, or other elements, having children isn't a necessity
  // views can be nested to create a more complex layout
  // ScrollView is a scrollable div, it can only have one child
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          CoreComponents {"\n"}
          {/* nested Text will inherit the style of the parent Text */}
          <Text
            style={{
              color: "red",
            }}
          >
            children of parent Text
          </Text>
        </Text>
        {/* <Text numberOfLines={5} style={{ color: "yellow", fontSize: 20 }}> */}
        <Text style={{ color: "yellow", fontSize: 20 }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          deleniti rem, suscipit ullam iusto quod quisquam aspernatur quidem sit
          voluptas et, quas recusandae, laudantium earum debitis quia quasi.
          Blanditiis eos voluptas ipsam? Dicta hic aspernatur unde architecto
          obcaecati tempore doloribus nulla aliquid eveniet quibusdam soluta
          modi quas harum vel omnis officiis corrupti fugiat, iusto molestias
          sed assumenda molestiae esse dolorem! Laboriosam, alias suscipit a
          numquam fugit commodi ullam officiis? Quam quo deleniti velit officia
          magni modi sequi cumque nisi, sed voluptatem, hic consectetur autem,
          repellat voluptatum obcaecati corporis quis non voluptas porro! Nam
          quis officia tempore magni explicabo error expedita quo. Quisquam,
          expedita eius! Ea repellat, quam eaque eos voluptatem eum. Sed
          corporis doloremque voluptas labore? Modi numquam ad asperiores. Sequi
          praesentium culpa obcaecati voluptatibus sed doloremque, nisi ab
          veritatis voluptatem exercitationem quae. Deserunt quos expedita
          perferendis repellendus nisi adipisci beatae cumque, voluptate quae
          laboriosam nulla corrupti amet a voluptatibus ex maiores esse ullam
          consectetur. Incidunt quidem dolorum omnis in ipsam quisquam
          accusantium tempora, dolores vero velit laudantium autem expedita esse
          quibusdam architecto aliquid amet iste porro adipisci rem nisi! Ipsum
          nihil molestias aperiam aliquam, facilis eos quasi nobis ullam.
          Repellat molestiae nesciunt incidunt, voluptatem quas ab sed
          necessitatibus. Aliquid. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sapiente assumenda dolor nihil, deserunt, corrupti
          doloribus aperiam dicta laudantium magnam quod totam veritatis hic
          deleniti mollitia nostrum fugit tempore quisquam. Dicta ratione nisi
          illo quaerat laborum perspiciatis voluptas quasi ipsam blanditiis est
          cumque eius, optio, accusamus corrupti consequuntur. Itaque, et, ipsa
          quas quaerat molestiae veritatis culpa quibusdam beatae quis eaque sed
          libero odio. Voluptates ducimus doloremque, minima ea ut a enim
          corporis! Excepturi doloribus doloremque voluptas vero, quo repellat
          non. Soluta nesciunt illo iste eos quas. Praesentium adipisci facere,
          magnam cumque ipsam quam ad porro distinctio vel accusantium, non
          illum assumenda!
        </Text>
      </View>
    </ScrollView>
  );
};

export default CoreComponents;

const styles = StyleSheet.create({});
