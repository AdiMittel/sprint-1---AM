'use strict';

var MINE = '💣'
var EMPTY = ' '

var gBoard;
var gGame = {
    score: 0,
    isOn: false,
}
var gLevel = {
    size: 4,
    mines: 2
};
var isShown = false

function init() {
    console.log('Hello');
    gBoard = buildBoard()
    renderBoard(gBoard)
    
}
function buildBoard() {
    var board = []
    for (var i = 0; i < gLevel.size; i++) {
        board[i] = []
        for (var j = 0; j < gLevel.size; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false
            }
        }
    }
    return board;
}

function renderBoard(board) {
    console.log(board);
    var strHtml = '<table><tbody>';
    for (var i = 0; i < board.length; i++) {
        strHtml += '<tr>';
        for (var j = 0; j < board[0].length; j++) {
            strHtml += `<td class="cell" onClick ="cellClicked(this)">${EMPTY}</td>`
        }
        strHtml += '</tr>'
    }
    strHtml+='</tbody></table>'
    var elTbody = document.querySelector('.board-container')
    console.log(strHtml);
    console.log(elTbody);
    elTbody.innerHTML = strHtml
}