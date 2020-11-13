

const AddPizzeria = () => {
  const handleSubmit = async (values) => {
    const data = new FormData();
    data.append("pizzeria_name", values.pizzeria);
    data.append("street", values.street);
    data.append("city", values.city);
    data.append("state", values.state);
    data.append("zip_code", values.zip_code);
    data.append("website", values.website);
    data.append("phone_number", values.phone_number);
    data.append("description", values.description);
    data.append("email", values.email);

    client
      .post("/create/", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  };
  return (
    <Formik
      initialValues={{
        pizzeria: "",
        street: "",
        city: "",
        state: "",
        zip_code: "",
        website: "",
        phone_number: "",
        description: "",
        email: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <SafeAreaView style={styles.content}>
          <ScrollView>
            <Image
              style={styles.image}
              source={{ uri: "https://bit.ly/book-pizza" }}
            />
            <TextInput
              style={styles.textBox}
              value={values.pizzeria}
              type="text"
              placeholder="Enter a new pizza place here"
              onChangeText={handleChange("pizzeria")}
            />
            <Text style={styles.error}>{errors.pizzeria}</Text>
            <TextInput
              style={styles.textBox}
              value={values.street}
              placeholder="Street address"
              onChangeText={handleChange("street")}
            />
            <Text style={styles.error}>{errors.street}</Text>
            <TextInput
              style={styles.textBox}
              value={values.city}
              placeholder="City"
              onChangeText={handleChange("city")}
            />
            <Text style={styles.error}>{errors.city}</Text>
            <TextInput
              style={styles.textBox}
              value={values.state}
              placeholder="State"
              onChangeText={handleChange("state")}
            />
            <Text style={styles.error}>{errors.state}</Text>
            <TextInput
              style={styles.textBox}
              value={values.zip_code}
              placeholder="Zip"
              onChangeText={handleChange("zip_code")}
            />
            <Text style={styles.error}>{errors.zip_code}</Text>
            <TextInput
              style={styles.textBox}
              value={values.website}
              placeholder="Website"
              onChangeText={handleChange("website")}
            />
            <Text style={styles.error}>{errors.website}</Text>
            <TextInput
              style={styles.textBox}
              value={values.phone_number}
              placeholder="Phone number"
              onChangeText={handleChange("phone_number")}
            />
            <Text style={styles.error}>{errors.phone_number}</Text>
            <TextInput
              style={styles.textBox}
              value={values.description}
              placeholder="Description"
              onChangeText={handleChange("description")}
            />
            <Text style={styles.error}>{errors.description}</Text>
            <TextInput
              style={styles.textBox}
              value={values.email}
              placeholder="Email"
              onChangeText={handleChange("email")}
            />
            <Text style={styles.error}>{errors.email}</Text>
            <Button
              style={styles.addButton}
              onPress={handleSubmit}
              title="Submit"
            />
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};
