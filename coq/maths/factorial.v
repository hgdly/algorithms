Require Import Coq.Arith.Arith.

Fixpoint factorial (n:nat) : nat :=
    match n with
        | 0 => 1
        | S n => S n * factorial n
    end.

Lemma factorial_eq : forall n:nat, factorial n = fact n.
Proof.
intros n.
induction n.
- simpl. reflexivity.
- simpl. rewrite IHn. reflexivity.
Qed.  

    