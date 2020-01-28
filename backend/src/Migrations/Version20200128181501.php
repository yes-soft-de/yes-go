<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200128181501 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE comment_entity ADD CONSTRAINT FK_C43B1C7A9395C3F3 FOREIGN KEY (customer_id) REFERENCES customer_entity (id)');
        $this->addSql('ALTER TABLE comment_entity ADD CONSTRAINT FK_C43B1C7A8C03F15C FOREIGN KEY (employee_id) REFERENCES employee_entity (id)');
        $this->addSql('ALTER TABLE customer_entity ADD comment_about_yes_go VARCHAR(255) DEFAULT NULL, CHANGE comment_about_us comment_about_yes_soft VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE employee_entity ADD years_of_experiance INT DEFAULT NULL, ADD word VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE comment_entity DROP FOREIGN KEY FK_C43B1C7A9395C3F3');
        $this->addSql('ALTER TABLE comment_entity DROP FOREIGN KEY FK_C43B1C7A8C03F15C');
        $this->addSql('ALTER TABLE customer_entity ADD comment_about_us VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, DROP comment_about_yes_soft, DROP comment_about_yes_go');
        $this->addSql('ALTER TABLE employee_entity DROP years_of_experiance, DROP word');
    }
}
