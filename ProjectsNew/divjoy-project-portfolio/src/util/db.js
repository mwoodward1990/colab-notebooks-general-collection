import { useReducer, useEffect, useRef } from "react";
import firebase from "./firebase";

const firestore = firebase.firestore();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

/**** USERS ****/

// Fetch user data (hook)
// This is called automatically by auth.js and merged into auth.user
export function useUser(uid) {
  return useQuery(uid && firestore.collection("users").doc(uid));
}

// Update an existing user
export function updateUser(uid, data) {
  return firestore.collection("users").doc(uid).update(data);
}

// Create a new user
export function createUser(uid, data) {
  return firestore
    .collection("users")
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}


/**** ASSIGNMENTS ****/
/* Example query functions (modify to your needs) */

// Fetch all assignments by owner (hooek)
export function useAssignmentsByOwner(owner) {
  return useQuery(
    owner && firestore.collection("assignments").where("owner", "==", owner)
  );
}

// Fetch assignment data
export function useAssignment(id) {
  return useQuery(id && firestore.collection("assignments").doc(id));
}

// Update an assignment
export function updateAssignment(id, data) {
  return firestore.collection("assignments").doc(id).update(data);
}

// Create a new assignment
export function createAssignment(data) {
  return firestore.collection("assignments").add(data);
}

// Delete an assignment
export function deleteAssignment(id) {
  return firestore.collection("assignments").doc(id).delete();
}


/**** ITEMS ****/
/* Example query functions (modify to your needs) */

// Fetch all items by owner (hook)
export function useItemsByOwner(owner) {
  return useQuery(
    owner && firestore.collection("items").where("owner", "==", owner)
  );
}

// Fetch item data
export function useItem(id) {
  return useQuery(id && firestore.collection("items").doc(id));
}

// Update an item
export function updateItem(id, data) {
  return firestore.collection("items").doc(id).update(data);
}

// Create a new item
export function createItem(data) {
  return firestore.collection("items").add(data);
}

// Delete an item
export function deleteItem(id) {
  return firestore.collection("items").doc(id).delete();
}


/**** PRODUCTS ****/
/* Example query functions (modify to your needs) */

// Fetch all products by owner (hook)
export function useProductsByOwner(owner) {
  return useQuery(
    owner && firestore.collection("products").where("owner", "==", owner)
  );
}

// Fetch Product data
export function useProduct(id) {
  return useQuery(id && firestore.collection("products").doc(id));
}

// Update an Product
export function updateProduct(id, data) {
  return firestore.collection("products").doc(id).update(data);
}

// Create a new Product
export function createProduct(data) {
  return firestore.collection("products").add(data);
}

// Delete an Product
export function deleteProduct(id) {
  return firestore.collection("products").doc(id).delete();
}


/**** BLOGS ****/
/* Example query functions (modify to your needs) */

// Fetch all blogs by owner (hook)
export function useBlogsByOwner(owner) {
  return useQuery(
    owner && firestore.collection("blogs").where("owner", "==", owner)
  );
}

// Fetch Blog data
export function useBlog(id) {
  return useQuery(id && firestore.collection("blogs").doc(id));
}

// Update an Blog
export function updateBlog(id, data) {
  return firestore.collection("blogs").doc(id).update(data);
}

// Create a new Blog
export function createBlog(data) {
  return firestore.collection("blogs").add(data);
}

// Delete an Blog
export function deleteBlog(id) {
  return firestore.collection("blogs").doc(id).delete();
}


/**** Activity Details ****/
/* Example query functions (modify to your needs) */

// Fetch all activities by owner (hook)
export function useActivitiesByOwner(owner) {
  return useQuery(
    owner &&
      firestore
        .collection("activity")
        .where("owner", "==", owner)
        .orderBy("createdAt", "desc")
  );
}

// Fetch activity data
export function useActivity(id) {
  return useQuery(id && firestore.collection("activity").doc(id));
}

// Update an activity
export function updateActivity(id, data) {
  return firestore.collection("activity").doc(id).update(data);
}

// Create a new activity
export function createActivity(data) {
  return firestore.collection("activity").add({
    ...data,
    createdAt: serverTimestamp(),
  });
}

// Delete an activity
export function deleteActivity(id) {
  return firestore.collection("activity").doc(id).delete();
}

/*** PROJECTS ***/
// Fetch all projects by owner (hook)
export function useProjectsByOwner(owner) {
  return useQuery(
    owner && firestore.collection("projects").where("owner", "==", owner)
  );
}

// Fetch project data
export function useProject(id) {
  return useQuery(id && firestore.collection("projects").doc(id));
}

// Update an project
export function updateProject(id, data) {
  return firestore.collection("projects").doc(id).update(data);
}

// Create a new project
export function createProject(data) {
  return firestore.collection("projects").add(data);
}

/**** HELPERS ****/

// Reducer for useQuery hook state and actions
const reducer = (state, action) => {
  switch (action.type) {
    case "idle":
      return { status: "idle", data: undefined, error: undefined };
    case "loading":
      return { status: "loading", data: undefined, error: undefined };
    case "success":
      return { status: "success", data: action.payload, error: undefined };
    case "error":
      return { status: "error", data: undefined, error: action.payload };
    default:
      throw new Error("invalid action");
  }
};

// Custom React hook that subscribes to a Firestore query
function useQuery(query) {
  // Our initial state
  // Start with an "idle" status if query is falsy, as that means hook consumer is
  // waiting on required data before creating the query object.
  // Example: useQuery(uid && firestore.collection("profiles").doc(uid))
  const initialState = {
    status: query ? "loading" : "idle",
    data: undefined,
    error: undefined,
  };

  // Setup our state and actions
  const [state, dispatch] = useReducer(reducer, initialState);

  // Gives us previous query object if query is the same, ensuring
  // we don't trigger useEffect on every render due to query technically
  // being a new object reference on every render.
  const queryCached = useMemoCompare(query, (prevQuery) => {
    // Use built-in Firestore isEqual method to determine if "equal"
    return prevQuery && query && query.isEqual(prevQuery);
  });

  useEffect(() => {
    // Return early if query is falsy and reset to "idle" status in case
    // we're coming from "success" or "error" status due to query change.
    if (!queryCached) {
      dispatch({ type: "idle" });
      return;
    }

    dispatch({ type: "loading" });

    // Subscribe to query with onSnapshot
    // Will unsubscribe on cleanup since this returns an unsubscribe function
    return queryCached.onSnapshot(
      (response) => {
        // Get data for collection or doc
        const data = response.docs
          ? getCollectionData(response)
          : getDocData(response);

        dispatch({ type: "success", payload: data });
      },
      (error) => {
        dispatch({ type: "error", payload: error });
      }
    );
  }, [queryCached]); // Only run effect if queryCached changes

  return state;
}

// Get doc data and merge doc.id
function getDocData(doc) {
  return doc.exists === true ? { id: doc.id, ...doc.data() } : null;
}

// Get array of doc data from collection
function getCollectionData(collection) {
  return collection.docs.map(getDocData);
}

// Used by useQuery to store Firestore query object reference
function useMemoCompare(next, compare) {
  // Ref for storing previous value
  const previousRef = useRef();
  const previous = previousRef.current;

  // Pass previous and next value to compare function
  // to determine whether to consider them equal.
  const isEqual = compare(previous, next);

  // If not equal update previousRef to next value.
  // We only update if not equal so that this hook continues to return
  // the same old value if compare keeps returning true.
  useEffect(() => {
    if (!isEqual) {
      previousRef.current = next;
    }
  });

  // Finally, if equal then return the previous value
  return isEqual ? previous : next;
}
