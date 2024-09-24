import Func "mo:base/Func";
import Nat "mo:base/Nat";

import Time "mo:base/Time";
import Text "mo:base/Text";
import Array "mo:base/Array";
import Iter "mo:base/Iter";

actor {
  // Define a struct to store visit information
  type Visit = {
    timestamp: Time.Time;
    userAgent: Text;
  };

  // Use a stable variable to persist visits across upgrades
  stable var visits : [Visit] = [];

  // Function to log a new visit
  public func logVisit(userAgent: Text) : async () {
    let newVisit : Visit = {
      timestamp = Time.now();
      userAgent = userAgent;
    };
    visits := Array.append(visits, [newVisit]);
  };

  // Function to get all visits
  public query func getVisits() : async [Visit] {
    visits
  };

  // Function to get the total number of visits
  public query func getTotalVisits() : async Nat {
    visits.size()
  };

  // System functions for upgrades
  system func preupgrade() {
    // visits is already a stable variable, so no action needed
  };

  system func postupgrade() {
    // visits will be automatically restored, so no action needed
  };
}
