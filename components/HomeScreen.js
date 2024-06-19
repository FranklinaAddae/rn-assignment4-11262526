import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Facebook",
      icon: require("../assets/images/facebook.png"),
      backgroundColor: "#5386E4",
      salary: "$180,000",
      location: "Accra, Ghana",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Google",
      icon: require("../assets/images/google.png"),
      backgroundColor: "#04284A",
      salary: "$180,000",
      location: "Accra, Ghana",
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Amazon",
      icon: "amazon",
      backgroundColor: "#FF9900",
      salary: "$160,000",
      location: "San Francisco, USA",
    },
    {
      id: 4,
      title: "UX Designer",
      company: "Apple",
      icon: require("../assets/images/apple.png"),
      backgroundColor: "#A2AAAD",
      salary: "$140,000",
      location: "Cupertino, USA",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "Microsoft",
      icon: "microsoft",
      backgroundColor: "#0078D4",
      salary: "$150,000",
      location: "Seattle, USA",
    },
    {
      id: 6,
      title: "Marketing Specialist",
      company: "Twitter",
      icon: "twitter",
      backgroundColor: "#1DA1F2",
      salary: "$130,000",
      location: "San Francisco, USA",
    },
    {
      id: 7,
      title: "Blockchain Developer",
      company: "IBM",
      icon: "ibm",
      backgroundColor: "#006699",
      salary: "$170,000",
      location: "New York, USA",
    },
    {
      id: 8,
      title: "Cybersecurity Analyst",
      company: "Cisco",
      icon: "cisco",
      backgroundColor: "#1BA0D7",
      salary: "$155,000",
      location: "San Jose, USA",
    },
    {
      id: 9,
      title: "Full Stack Developer",
      company: "Netflix",
      icon: "netflix",
      backgroundColor: "#E50914",
      salary: "$175,000",
      location: "Los Angeles, USA",
    },
    {
      id: 10,
      title: "AI Engineer",
      company: "Tesla",
      icon: "tesla",
      backgroundColor: "#CC0000",
      salary: "$180,000",
      location: "Palo Alto, USA",
    },
    
  ];
const popularJobs = [
  {
    id: 1,
    title: "Jr Executive",
    salary: "$96,000/y",
    company: "Burger King",
    location: "Los Angeles, US",
    icon: require("../assets/images/burger.png"),
    backgroundColor: "white",
  },
  {
    id: 2,
    title: "Product Manager",
    salary: "$84,000/y",
    company: "Beats",
    location: "Florida, US",
    icon: require("../assets/images/beats.png"),
    backgroundColor: "white",
  },
  {
    id: 3,
    title: "Product Manager",
    salary: "$86,000/y",
    company: "Facebook",
    location: "Florida, US",
    icon: require("../assets/images/fb.png"),
    backgroundColor: "white",
  },
  {
    id: 4,
    title: "Marketing Specialist",
    salary: "$75,000/y",
    company: "Coca-Cola",
    location: "Atlanta, US",
    icon: "cola",
    backgroundColor: "white",
  },
  {
    id: 5,
    title: "Data Analyst",
    salary: "$85,000/y",
    company: "Netflix",
    location: "San Francisco, US",
    icon: "netflix",
    backgroundColor: "white",
  },
  {
    id: 6,
    title: "Sales Manager",
    salary: "$95,000/y",
    company: "Amazon",
    location: "Seattle, US",
    icon: "amazon",
    backgroundColor: "white",
  },
  {
    id: 7,
    title: "Graphic Designer",
    salary: "$70,000/y",
    company: "Adobe",
    location: "San Jose, US",
    icon: "adobe",
    backgroundColor: "white",
  },
  {
    id: 8,
    title: "UX Designer",
    salary: "$78,000/y",
    company: "Airbnb",
    location: "San Francisco, US",
    icon: "airbnb",
    backgroundColor: "white",
  },
  {
    id: 9,
    title: "Business Analyst",
    salary: "$88,000/y",
    company: "Microsoft",
    location: "Redmond, US",
    icon: "microsoft",
    backgroundColor: "white",
  },
  {
    id: 10,
    title: "Operations Manager",
    salary: "$110,000/y",
    company: "Tesla",
    location: "Palo Alto, US",
    icon:"tesls",
    backgroundColor: "white",
  },
];

function HomeScreen({ route }) {
  const { name, email } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.headline}>
        <View style={styles.nameMailContainer}>
          <Text style={styles.Name}>{name}</Text>
          <Text style={styles.Address}>{email}</Text>
        </View>

        <View style={styles.User}>
          <Image
            source={require("../assets/images/user.png")}
            style={styles.userImage}
          />

          <View style={styles.redDotContainer}>
            <Image
              source={require("../assets/images/dot.png")}
              style={styles.redDot}
            />
          </View>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <MaterialCommunityIcons
            name="magnify"
            size={22}
            color="#95969D"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search a job or position"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Image
            source={require("../assets/images/filter.png")}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <ScrollView
        horizontal
        style={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
      >
        {jobs.map((job) => (
          <View
            key={job.id}
            style={[styles.jobCard, { backgroundColor: job.backgroundColor }]}
          >
            <View>
              <View style={styles.iconContainer}>
                <Image source={job.icon} style={styles.icon} />
              </View>
              <View style={styles.jobInfo}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.companyName}>{job.company}</Text>
              </View>
            </View>
            <View style={styles.salaryLocation}>
              <Text style={styles.jobDetails}>{job.salary}</Text>
              <Text style={styles.jobDetails}>{job.location}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <ScrollView style={styles.verticalScrollContainer}>
        {popularJobs.map((job) => (
          <View
            key={job.id}
            style={[
              styles.popularJobCard,
              { backgroundColor: job.backgroundColor },
            ]}
          >
            <View style={styles.popularJobiconContainer}>
              <Image source={job.icon} style={styles.popularJobicon} />
            </View>
            <View style={styles.popularJobInfo}>
              <View style={styles.titleSalary}>
                <Text style={styles.popularJobTitle}>{job.title}</Text>
                <Text style={styles.popularJobSalary}>{job.salary}</Text>
              </View>
              <View style={styles.nameLocation}>
                <Text style={styles.popularJobName}>{job.company}</Text>
                <Text style={styles.popularJobLocation}>{job.location}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingTop: 5,
    paddingHorizontal: 15,
    backgroundColor: "#FAFAFD",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },

  headline: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  nameMailContainer: {
    height: 55,
    width: 254,
  },

  redDotContainer: {
    backgroundColor: 'rgba(250, 250, 253, 1)',
    height: 16,
    width: 16,
    position: "absolute",
    right: 2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Name: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 36,
  },

  Address: {
    color: "gray",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    marginBottom: 30,
  },

  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    backgroundColor: "#F2F2F3",
  },

  searchIcon: {
    marginRight: 5,
  },

  searchInput: {
    height: 48,
    flex: 1,
    backgroundColor: "#F2F2F3",
    fontSize: 15,
  },

  filterButton: {
    backgroundColor: "#F2F2F3",
    height: 48,
    width: 48,
    padding: 10,
    borderRadius: 5,
  },

  sectionTitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 16,
    color: "#0D0D26",
    fontWeight: "bold",
    lineHeight: 20.8,
  },

  seeAll: {
    color: "#95969D",
    fontSize: 13,
    lineHeight: 20.8,
  },

  scrollContainer: {
    height: 0,
  },

  jobCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 24,
    marginRight: 15,
    width: 250,
    height: 186,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  salaryLocation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  jobDetails: {
    color: "white",
    fontSize: 15,
    lineHeight: 24,
  },

  iconContainer: {
    height: 46,
    width: 46,
    backgroundColor: "#fff",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    height: 45,
    width: 76,
  },
  jobInfo: {
    position: "absolute",
    left: 70,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  companyName: {
    fontSize: 14,
    color: "#555",
    color: "white",
  },

  verticalScrollContainer: {
    flex: 1,
  },
  popularJobCard: {
    height: 74,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  popularJobiconContainer: {
    backgroundColor: "white",
    borderRadius: 30,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  popularJobInfo: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },

  titleSalary: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  nameLocation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  popularJobTitle: {
    fontSize: 14,
    lineHeight: 18.2,
    fontWeight: "bold",
  },
  popularJobLocation: {
    fontSize: 14,
    color: "#95969D",
  },

  popularJobName: {
    fontSize: 14,
    color: "#95969D",
  },
});

export default HomeScreen;


