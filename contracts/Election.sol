pragma solidity ^0.4.25;

contract Election {
    // Model a Candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // Store accounts that have voted
    mapping(address => bool) public voters;
    // Store Candidates
    // Fetch Candidate
    mapping(uint => Candidate) public candidates;
    // Store Candidates Count
    uint public candidatesCount;

    // voted event
    event votedEvent (
        uint indexed _candidateId
    );

  /*  constructor (string names) public {
        //addCandidate("Candidate 1");
        //addCandidate("Candidate 2");
      bytes memory b=bytes(names);
      uint ll=10;
      bytes memory c=new bytes(ll);
      uint k=0;                                                
      for(uint i=0;i<b.length;i++){
          if(b[i]==47){
              addCandidate(string(c));
              k=0;
              c=new bytes(ll);
          }
          else{
              c[k++]=b[i];
          }
      }
        
    }*/
    constructor () public {
        addCandidate("Prathap");
        addCandidate("Mithul");
        addCandidate("Ajith");
        addCandidate("Suma");
        addCandidate("Ram");
    }

    function addCandidate (string _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function vote (uint _candidateId) public {
        // require that they haven't voted before
        require(!voters[msg.sender]);

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount);

        // record that voter has voted
        voters[msg.sender] = true;

        // update candidate vote Count
        candidates[_candidateId].voteCount ++;

        // trigger voted event
        emit votedEvent(_candidateId);
    }
}
