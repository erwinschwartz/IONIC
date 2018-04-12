import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import jQuery from "jquery";



/**
 * Generated class for the TictactoePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tictactoe',
  templateUrl: 'tictactoe.html',
})
export class TictactoePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TictactoePage');

    jQuery(document).ready(function() {

      var C1, C2, C3, C4, C5, C6, C7, C8, C9;
      var turn = 0;
    
    // Vide le tableau
    function clearBoard() {
      C1 = jQuery('#c1').text('');
      C2 = jQuery('#c2').text('');
      C3 = jQuery('#c3').text('');
      C4 = jQuery('#c4').text('');
      C5 = jQuery('#c5').text('');
      C6 = jQuery('#c6').text('');
      C7 = jQuery('#c7').text('');
      C8 = jQuery('#c8').text('');
      C9 = jQuery('#c9').text('');
      turn = 0;
    }
    
    // Quand rejoué est choisi
    jQuery('#anotherRound').click(function() {
      clearBoard();
      jQuery('#finalScreen').hide();
    });
    
    // Remplissage + fonction call
    jQuery('ion-col').click(function() {
      if (turn === 0) {
        if (jQuery(this).text() === "") {
          jQuery(this).text('X');
          checkSquares();
          checkWinner();
          turn = 1;
          aiMove();
          checkSquares();
          checkWinner();
        }
      }
    });
    
    
    function aiMove() {
      // case 1: Ai check
      if (C1 === '' && ((C2 === 'O' && C3 === 'O') || (C4 === 'O' && C7 === 'O') || (C5 === 'O' && C9 === 'O'))) {
        jQuery('#c1').text('O');
        turn = 0;
      }
      else if (C2 === '' && ((C1 === 'O' && C3 === 'O') || (C5 === 'O' && C8 === 'O'))) {
        jQuery('#c2').text('O');
        turn = 0;
      }
      else if (C3 === '' && ((C1 === 'O' && C2 === 'O') || (C6 === 'O' && C9 === 'O') || (C5 === 'O' && C7 === 'O'))) {
        jQuery('#c3').text('O');
        turn = 0;
      }
      else if (C4 === '' && ((C1 === 'O' && C7 === 'O') || (C5 === 'O' && C6 === 'O'))) {
        jQuery('#c4').text('O');
        turn = 0;
      }
      else if (C5 === '' && ((C4 === 'O' && C6 === 'O') || (C1 === 'O' && C9 === 'O') || (C3 === 'O' && C7 === 'O'))) {
        jQuery('#c5').text('O');
        turn = 0;
      }
      else if (C6 === '' && ((C4 === 'O' && C5 === 'O') || (C3 === 'O' && C9 === 'O'))) {
        jQuery('#c6').text('O');
        turn = 0;
      }
      else if (C7 === '' && ((C8 === 'O' && C9 === 'O') || (C1 === 'O' && C4 === 'O') || (C3 === 'O' && C5 === 'O'))) {
        jQuery('#c7').text('O');
        turn = 0;
      }
      else if (C8 === '' && ((C7 === 'O' && C9 === 'O') || (C2 === 'O' && C5 === 'O'))) {
        jQuery('#c8').text('O');
        turn = 0;
      }
      else if (C9 === '' && ((C7 === 'O' && C8 === 'O') || (C3 === 'O' && C6 === 'O') || (C1 === 'O' && C5 === 'O'))) {
        jQuery('#c9').text('O');
        turn = 0;
      }
      // case 2: if there is a chance to block
      else if (C1 === "" && ((C2 === 'X' && C3 === 'X') || (C4 === 'X' && C7 === 'X') || (C5 === 'X' && C9 === 'X'))) {
        jQuery("#c1").text('O');
        turn = 0;
      }
      else if (C2 === "" && ((C1 === 'X' && C3 === 'X') || (C5 === 'X' && C8 === 'X'))) {
        jQuery("#c2").text('O');
        turn = 0;
      }
      else if (C3 === "" && ((C1 === 'X' && C2 === 'X') || (C6 === 'X' && C9 === 'X') || (C5 === 'X' && C7 === 'X'))) {
        jQuery("#c3").text('O');
        turn = 0;
      }
      else if (C4 === "" && ((C1 === 'X' && C7 === 'X') || (C5 === 'X' && C6 === 'X'))) {
        jQuery("#c4").text('O');
        turn = 0;
      }
      else if (C5 === "" && ((C4 === 'X' && C6 === 'X') || (C1 === 'X' && C9 === 'X') || (C3 === 'X' && C7 === 'X'))) {
        jQuery("#c5").text('O');
        turn = 0;
      }
      else if (C6 === "" && ((C4 === 'X' && C5 === 'X') || (C3 === 'X' && C9 === 'X'))) {
        jQuery("#c6").text('O');
        turn = 0;
      }
      else if (C7 === "" && ((C8 === 'X' && C9 === 'X') || (C1 === 'X' && C4 === 'X') || (C3 === 'X' && C5 === 'X'))) {
        jQuery("#c7").text('O');
        turn = 0;
      }
      else if (C8 === "" && ((C7 === 'X' && C9 === 'X') || (C2 === 'X' && C5 === 'X'))) {
        jQuery("#c8").text('O');
        turn = 0;
      }
      else if (C9 === "" && ((C7 === 'X' && C8 === 'X') || (C3 === 'X' && C6 === 'X') || (C1 === 'X' && C5 === 'X'))) {
        jQuery("#c9").text('O');
        turn = 0;
      }
      // case 3: center
      else if (C5 === "") {
        jQuery("#c5").text('O');
        turn = 0;
      }
      // case 4: opposite corner
      else if (C1 === "" && (C3 === 'X'  || C7 === 'X')) {
        jQuery("#c1").text('O');
        turn = 0;
      }
      else if (C3 === "" && (C1 === 'X'  || C9 === 'X')) {
        jQuery("#c3").text('O');
        turn = 0;
      }
      else if (C9 === "" && (C3 === 'X'  || C7 === 'X')) {
        jQuery("#c9").text('O');
        turn = 0;
      }
      else if (C7 === "" && (C1 === 'X'  || C9 === 'X')) {
        jQuery("#c7").text('O');
        turn = 0;
      }
      // case 5: corner
      else if (C1 === "") {
        jQuery("#c1").text('O');
        turn = 0;
      }
      else if (C3 === "") {
        jQuery("#c3").text('O');
        turn = 0;
      }
      else if (C7 === "") {
        jQuery("#c7").text('O');
        turn = 0;
      }
      else if (C9 === "") {
        jQuery("#c9").text('O');
        turn = 0;
      }
      // case 6: empty side
      else if (C2 === "") {
        jQuery("#c2").text('O');
        turn = 0;
      }
      else if (C6 === "") {
        jQuery("#c6").text('O');
        turn = 0;
      }
      else if (C8 === "") {
        jQuery("#c8").text('O');
        turn = 0;
      }
      else if (C4 === "") {
        jQuery("#c4").text('O');
        turn = 0;
      }
    }
    
    // Verif
    function checkSquares() {
      C1 = jQuery("#c1").html();
      C2 = jQuery("#c2").html();
      C3 = jQuery("#c3").html();
      C4 = jQuery("#c4").html();
      C5 = jQuery("#c5").html();
      C6 = jQuery("#c6").html();
      C7 = jQuery("#c7").html();
      C8 = jQuery("#c8").html();
      C9 = jQuery("#c9").html();
    }
    
    function checkWinner() {
      // Le joueur gagne
      if ((C1 === C2 && C1 === C3 && (C1 === 'X')) ||
        (C4 === C5 && C4 === C6 && (C4 === 'X')) ||
        (C7 === C8 && C7 === C9 && (C7 === 'X')) ||
        (C1 === C4 && C1 === C7 && (C1 === 'X')) ||
        (C2 === C5 && C2 === C8 && (C2 === 'X')) ||
        (C3 === C6 && C3 === C9 && (C3 === 'X')) ||
        (C1 === C5 && C1 === C9 && (C1 === 'X')) ||
        (C3 === C5 && C3 === C7 && (C3 === 'X'))
      ) {
        jQuery('#winner').text('Bravo tu as gagne');
        jQuery('#finalScreen').fadeTo('slow', 1);
      }
      // ai wins
      else if ((C1 === C2 && C1 === C3 && (C1 === 'O')) ||
        (C4 === C5 && C4 === C6 && (C4 === 'O')) ||
        (C7 === C8 && C7 === C9 && (C7 === 'O')) ||
        (C1 === C4 && C1 === C7 && (C1 === 'O')) ||
        (C2 === C5 && C2 === C8 && (C2 === 'O')) ||
        (C3 === C6 && C3 === C9 && (C3 === 'O')) ||
        (C1 === C5 && C1 === C9 && (C1 === 'O')) ||
        (C3 === C5 && C3 === C7 && (C3 === 'O'))
      ) {
        jQuery('#winner').text('Tu as perdu face a une AI debile');
        jQuery('#finalScreen').fadeTo('slow', 1);
      }
      // tie: all squares have a value but no winning combination has been detected
      else if (C1 && C2 && C3 && C4 && C5 && C6 && C7 && C8 && C9) {
        jQuery('#winner').text('Egalite');
        jQuery('#finalScreen').fadeTo('slow', 1);
      }
    }
    
    
    
    });
    
  }

}
